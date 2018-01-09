"use strict";
var ACTIVE_CLASS = 'active';
var APP_OPEN_CLASS = 'app-open';

$( document ).ready(function() {
var closeApp = function(app, tray, cb, options) {
    tray.removeClass(APP_OPEN_CLASS);
    tray.find('> .app').removeClass(ACTIVE_CLASS).attr('aria-expanded', 'false');
    resizeTray(tray, function(){
        app.trigger('app-closed', app, tray, options || {});
    });
    if (typeof cb === 'function') {
        cb();
    }
};
var openApp = function(app, tray, options) {
    var currentlyOpenApp = tray.find('> .app.' + ACTIVE_CLASS);
    if (currentlyOpenApp.length > 0) {
        closeApp($(currentlyOpenApp[0]), tray, function() {
            setTimeout(function(){
                openApp(app, tray, options);
            }, 400);
            
        });
    } else {
        app.addClass(ACTIVE_CLASS).attr('aria-expanded', 'true');
        tray.addClass(APP_OPEN_CLASS);
        resizeTray(tray, function(){
        app.trigger('app-opened', app, tray, options || {});
    });
        
    }
};

var bindAppEvents = function(apps, tray) {
    var appEvents = {
        'app-toggle': function(e, options) {
            e.preventDefault();
            var targetApp = $(e.target).closest('.app');
            var isOpen = targetApp.hasClass(ACTIVE_CLASS);
            if (isOpen) {
                closeApp(targetApp, tray, null, options);
            } else {
                openApp(targetApp, tray, options);
            }
        },
        'app-open': function(e, options) {
            e.preventDefault();
            var targetApp = $(e.target).closest('.app');
            openApp(targetApp, tray, options);
        },
        'app-close': function(e, options) {
            e.preventDefault();
            var targetApp = $(e.target).closest('.app');
            closeApp(targetApp, tray, null, options);
        },
        'click': function(e) {
            
            var targetApp = $(e.target).closest('.app');
            var isActive = targetApp.hasClass(ACTIVE_CLASS);
            var clickedInHeader = $(e.target).closest('.app-header').length > 0;
            var clickedInTitle = $(e.target).closest('.app-title').length > 0;
             if(!isActive && (clickedInHeader || clickedInTitle)){
                e.preventDefault();
                 openApp(targetApp, tray);
            }
        }
    };
    $.each(appEvents, function(eventName, cb) {
        apps.on(eventName, cb);
    });
};
var initAppTray = function() {
    var tray = $(this);
    var apps = tray.find('> .app');
    apps.attr('aria-expanded', 'false').attr('tabindex', '-1');
    bindAppEvents(apps, tray);
};

var initHelpers = function() {
$('[data-close-tray-apps]').on('click', function() {
    var tray = $($(this).attr('data-close-tray-apps') + '.app-open');
    if (tray.length > 0) {
        var currentlyOpenApp = tray.find('> .app.' + ACTIVE_CLASS);
        if (currentlyOpenApp.length > 0) {
            closeApp(currentlyOpenApp, tray);
        }
    }
});
$('.app-close').on('click', function(e) {
    var targetApp = $(e.target).closest('.app');
    var tray = targetApp.closest('.app-tray');
    closeApp(targetApp, tray);
});
$('[data-toggle-app]').on('click', function(e){
    var targetApp = $($(this).attr('data-toggle-app'));
    var tray = targetApp.closest('.app-tray');
            var isOpen = targetApp.hasClass(ACTIVE_CLASS);
            if (isOpen) {
                closeApp(targetApp, tray);
            } else {
                openApp(targetApp, tray);
            }
 });
};
   
var destroyAppTray = function() {
    var tray = $(this);
    var apps = tray.find('> .app');
    $.each(['click','app-toggle','app-close','app-open','app-closed','app-opened'], function(index, event) {
        apps.off(event);
    });
};
var destroyHelpers = function(){
    $.each([$('[data-toggle-app]'), $('.app-close'), $('.close-all-apps')], function(index, el) {
        el.off('click');
    });
};
var onBeforeDestroy = function(){
    $('.app-tray').each(destroyAppTray);
    destroyHelpers();
}
var resizeTray = function(tray, cb){
    var wrapper = tray.parent();
    if(wrapper.hasClass('tray-wrapper auto-resize')){
        setTimeout(function(){
                setAutoResize(null, wrapper[0]);
            cb();
            }, 400);
    }
}
var setAutoResize = function(index, el){
    var height = $(window).height();
    var trayHeight = $(el).find('> .app-tray').height();
    if(trayHeight > height){
        height = trayHeight;
    }
    $(el).height(height);                      
}
var initWrapperAutoResize = function(){
    var wrappers = $(".tray-wrapper.auto-resize");
    if(wrappers.length > 0) {
        $(window).resize(function() {
          wrappers.each(setAutoResize);
       });
        wrappers.each(setAutoResize);
    }
}
var initialize = function(){
    $('.app-tray').each(initAppTray);
    initHelpers();
    initWrapperAutoResize();   
}
$( window ).unload(onBeforeDestroy);
    initialize();
});
