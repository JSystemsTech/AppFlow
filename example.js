
$( document ).ready(function() {
    var El_CLASSES = {
  'spacing': 'spacing-1 spacing-2 spacing-3 spacing-4 spacing-5',
  'app-size': 'app-size-1 app-size-2 app-size-3 app-size-4 app-size-5 app-size-6 app-size-7 app-size-8 app-size-auto app-size-auto-2 app-size-auto-3 app-size-auto-4 app-size-auto-5 app-size-auto-6 app-size-auto-7 app-size-auto-8',
  'app-span': 'app-span-1 app-span-2 app-span-3 app-span-4 app-span-5',
  'app-height-span': 'app-height-span-2 app-height-span-3 app-height-span-4 app-height-span-5',
  'icon-size':'app-icon-xs app-icon-sm app-icon-md app-icon-lg app-icon-xl',
        'glass': 'glass',
        'square': 'app-square',
        'beveled': 'beveled',
        'bg-diff':'bg-app-open-diff',
        'app-open': '',
        'blured': 'blured blured-dark',
        'shadowed': 'app-shadowed'
 };
    var AppOpenSelect = $('#appOpenSelect');
    var AppSizeSelect = $('#appSizeSelect');
    for(var percent = 99; percent >= 50; percent --){
     El_CLASSES['app-open'] = El_CLASSES['app-open'] + 'app-open-' + percent + ' ';
       AppOpenSelect.append('<option value="app-open-' + percent+ '">'+percent+'</option>'); 
    }
    
    var changeElClass = function(el, type, added){
        el.removeClass(El_CLASSES[type]).addClass(added);
 }
    var TRAY = $('#myAppTray');
AppOpenSelect.bind('change',function(){
    changeElClass($('#myAppTray'), 'app-open', $('#appOpenSelect').val());
});
    AppSizeSelect.bind('change',function(){
    changeElClass($('#myAppTray'), 'app-open', $('#appSizeSelect').val());
});
    $('#MyAppTrayControls input[name="blured"]').bind('change',function(){
    changeElClass(TRAY, 'blured', $('#MyAppTrayControls input[name="blured"]:checked').val());
});
$('#MyAppTrayControls input[name="spacing"]').bind('change',function(){
    changeElClass(TRAY, 'spacing', $('#MyAppTrayControls input[name="spacing"]:checked').val());
});
    
     $('#MyAppTrayControls input[name="shadowed"]').bind('change',function(){
            var changeClass = '';
            if( $('#MyAppTrayControls input[name="shadowed"]').prop('checked')){
            changeClass = 'app-shadowed';
               }
            changeElClass(TRAY, 'shadowed', changeClass);
});
    
          var app = $('#myAppTray').find('> .app');
          var appSettingsForm = $('#MyAppTrayControls');
        
          var glassCheckbox = appSettingsForm.find('input[name="glass"]');
          var squareCheckbox = appSettingsForm.find('input[name="square"]');
          var beveledCheckbox = appSettingsForm.find('input[name="beveled"]');
          var bgDiff = appSettingsForm.find('input[name="bg-diff"]');
          var iconSizeRadio = appSettingsForm.find('input[name="icon-size"]');
          var appSpanRadio = appSettingsForm.find('input[name="app-span"]');
          var appHeightSpanRadio = appSettingsForm.find('input[name="app-height-span"]');
            
        iconSizeRadio.bind('change',function(){
            changeElClass(app.find('>.app-header.app-icon'), 'icon-size', appSettingsForm.find('input[name="icon-size"]:checked').val());
        });
        appSpanRadio.bind('change',function(){
            changeElClass(app, 'app-span', appSettingsForm.find('input[name="app-span"]:checked').val());
        });
        appHeightSpanRadio.bind('change',function(){
            changeElClass(app, 'app-height-span', appSettingsForm.find('input[name="app-height-span"]:checked').val());
        });
        glassCheckbox.bind('change',function(){
            var changeClass = '';
            if(appSettingsForm.find('input[name="glass"]').prop('checked')){
            changeClass = 'glass';
               }
            changeElClass(app, 'glass', changeClass);
        });
        squareCheckbox.bind('change',function(){
            var changeClass = '';
            if(appSettingsForm.find('input[name="square"]').prop('checked')){
            changeClass = 'app-square';
               }
            changeElClass(app, 'square', changeClass);
        });
        beveledCheckbox.bind('change',function(){
            var changeClass = '';
            if(appSettingsForm.find('input[name="beveled"]').prop('checked')){
            changeClass = 'beveled';
               }
            changeElClass(app, 'beveled', changeClass);
        });
    bgDiff.bind('change',function(){
            var changeClass = '';
            if(appSettingsForm.find('input[name="bg-diff"]').prop('checked')){
            changeClass = 'bg-app-open-diff';
               }
            changeElClass(app, 'bg-diff', changeClass);
        });
        
    });
