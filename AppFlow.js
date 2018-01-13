"use strict";
var ACTIVE_CLASS = 'active';
var HIDDEN_CLASS = 'hide-inactive';
var APP_OPEN_CLASS = 'app-open';
var CLOSED_CLASS = 'app-closed';
var SLIDE_CLASSES = 'slide-in-left slide-out-right slide-out-left slide-in-right';

var SLIDE_IN_RIGHT = 'slide-in-right';
var SLIDE_OUT_RIGHT = 'slide-out-right';
var SLIDE_IN_LEFT = 'slide-in-left';
var SLIDE_OUT_LEFT = 'slide-out-left';
var SLIDE_DIRECTION = {LEFT: 
                         {
                             IN: ACTIVE_CLASS + " " + SLIDE_IN_LEFT, 
                             OUT: SLIDE_OUT_RIGHT
                         },
                         RIGHT: 
                         {
                             IN: ACTIVE_CLASS + " " + SLIDE_IN_RIGHT, 
                             OUT: SLIDE_OUT_LEFT
                         }
                        };

$( document ).ready(function() {
var closeApp = function(app, tray, cb, options) {
    onAppCssTransitionDone(app, function(){
            app.removeClass(ACTIVE_CLASS).attr('aria-expanded', 'false');
            app.addClass(CLOSED_CLASS);
            app.attr('tabindex', '0');
            app.focus();
            app.trigger('app-closed', app, tray, options || {});
            resizeTray(tray);
            if (typeof cb === 'function') {
                cb();
            }
        });
    tray.removeClass(HIDDEN_CLASS + " " + APP_OPEN_CLASS);
};
var slideInOut = function (currentlyOpenApp, app, tray, options){
    app.removeClass(CLOSED_CLASS);
            onAppCssAnimationDone(app, function(){
                currentlyOpenApp.removeClass(ACTIVE_CLASS + ' ' + SLIDE_CLASSES);
                currentlyOpenApp.addClass(CLOSED_CLASS);
                app.removeClass(SLIDE_CLASSES);
                currentlyOpenApp.trigger('app-closed', currentlyOpenApp, tray, {});
                app.trigger('app-opened', app, tray, options || {});
            });
            var currentlyOpenAppIndex = getAppIndex(currentlyOpenApp);
            var appIndex = getAppIndex(app);
            
            var DIRECTION = SLIDE_DIRECTION.RIGHT;
            if(appIndex < currentlyOpenAppIndex){
                DIRECTION = SLIDE_DIRECTION.LEFT;
            }
            app.addClass(DIRECTION.IN);
            currentlyOpenApp.addClass(DIRECTION.OUT);
};
var getAppIndex = function(app){
    return parseInt(app.attr('app-index'));
};
var openApp = function(app, tray, options) {
    var currentlyOpenApp = tray.find('> .app.' + ACTIVE_CLASS);
    if (currentlyOpenApp.length > 0) {
        var isInSameTray = currentlyOpenApp.attr('tray-parent-index') === app.attr('tray-parent-index');
        if(isInSameTray){
            slideInOut(currentlyOpenApp, app, tray, options);
        }else{
            closeApp($(currentlyOpenApp[0]), tray, function() {
                openApp(app, tray, options);
            });
        }
    } else {
        onAppCssTransitionDone(app, function(){
            tray.addClass(HIDDEN_CLASS);
            tray.focus();
            resizeTray(tray);
            $('html, body').animate({
                scrollTop: app.offset().top
             }, 400);
            app.focus();
            app.attr('tabindex', '-1');
            app.trigger('app-opened', app, tray, options || {});
        });
        app.removeClass(CLOSED_CLASS).addClass(ACTIVE_CLASS).attr('aria-expanded', 'true');
        tray.addClass(APP_OPEN_CLASS);
    }
};
var onAppCssTransitionDone = function(app, cb){
    app.one("webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend", cb);
};
var onAppCssAnimationDone = function(app, cb){
    app.one("webkitAnimationEnd oanimationend MSAnimationEnd", cb);
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
        },
        'keypress': function(e) {
            if (e.which === 32 && $(this).hasClass('app')){
                e.preventDefault();
                $(this).find('> .app-header').trigger('click');
                
            }
        }
    };
    $.each(appEvents, function(eventName, cb) {
        apps.on(eventName, cb);
    });
};

var initAppTray = function(trayIndex) {
    var tray = $(this);
    var apps = tray.find('> .app');
    apps.attr('aria-expanded', 'false').attr('tabindex', '0');
    apps.addClass(CLOSED_CLASS);
    $.each(apps, function(index, el) {
        var app= $(el);
        var id = app.attr('id') || 'app' + index;
        app.attr('id', id);
        app.attr('tray-parent-index', trayIndex);
        app.attr('app-index', index);
        var titleIdDefault = id + 'Title';
        var titleId = app.find('> .app-title').attr('id') || titleIdDefault;
        app.find('> .app-title').attr('id', titleId);
        app.attr('aria-labelledby', titleId);
    });
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
var resizeTray = function(tray){
    var wrapper = tray.parent();
    if(wrapper.hasClass('tray-wrapper auto-resize')){
        setAutoResize(null, wrapper[0]);
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
