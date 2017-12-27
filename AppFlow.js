"use strict";
var ACTIVE_CLASS = 'active';
var APP_OPEN_CLASS = 'app-open';

$( document ).ready(function() {
var closeAllApps = function(tray, cb) {
    tray.removeClass(APP_OPEN_CLASS);
    tray.find('> .app').removeClass(ACTIVE_CLASS).attr('aria-expanded', 'false');
    if (typeof cb === 'function') {
        cb();
    }
};
var openApp = function(app, tray) {
    var currentlyOpenApp = tray.find('> .app.' + ACTIVE_CLASS);
    if (currentlyOpenApp.length > 0) {
        closeApp($(currentlyOpenApp[0]), tray, function() {
            setTimeout(function(){
                openApp(app, tray);
            }, 400);
            
        });
    } else {
        app.addClass(ACTIVE_CLASS).attr('aria-expanded', 'true');
        tray.addClass(APP_OPEN_CLASS);
        app.trigger('app-opened', app, tray);
    }
};
var closeApp = function(app, tray, cb) {
    closeAllApps(tray, cb);
    app.trigger('app-closed', app, tray);
};

var bindAppEvents = function(apps, tray) {
    var appEvents = {
        'app-toggle': function(e) {
            var targetApp = $(e.target).closest('.app');
            var isOpen = targetApp.hasClass(ACTIVE_CLASS);
            if (isOpen) {
                closeApp(targetApp, tray);
            } else {
                openApp(targetApp, tray);
            }
        },
        'app-open': function(e) {
            var targetApp = $(e.target).closest('.app');
            openApp(targetApp, tray);
        },
        'app-close': function(e) {
            var targetApp = $(e.target).closest('.app');
            closeApp(targetApp, tray);
        },
        'click': function(e) {
            console.log('click');
            var targetApp = $(e.target).closest('.app');
            
            var isCloseButton = $(e.target).closest('.app-close').length > 0;
            var isContentEl = $(e.target).closest('.app-content').length > 0 && $(e.target).closest('.app-content').closest('.app-tray').is(tray);
            
            var isHeaderEl = $(e.target).closest('.app-header').length > 0;
            var isActive = $(e.target).hasClass(ACTIVE_CLASS);
            if(isHeaderEl){
                if (isCloseButton === true) {
                    closeApp(targetApp, tray);
                }else if((!isContentEl && !isActive)){
                    openApp(targetApp, tray);
                }
            }
        }
    };
    $.each(appEvents, function(eventName, cb) {
        apps.bind(eventName, cb);
    });
};
var initAppTray = function() {
    var tray = $(this);
    var apps = tray.find('> .app');
    console.log(apps);
    apps.attr('aria-expanded', 'false').attr('tab-index', '1');
    bindAppEvents(apps, tray);
};

$('.close-all-apps').bind('click', function() {
    var tray = $($(this).attr('data-target') + '.app-open');
    if (tray.length > 0) {
        var currentlyOpenApp = tray.find('> .app.' + ACTIVE_CLASS);
        if (currentlyOpenApp.length > 0) {
            closeApp(currentlyOpenApp, tray);
        }
    }
});
$('.app-tray').each(initAppTray);
});
