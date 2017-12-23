
$( document ).ready(function() {
    var El_CLASSES = {
  'spacing': 'spacing-1 spacing-2 spacing-3 spacing-4 spacing-5',
  'app-size': 'app-size-1 app-size-2 app-size-3 app-size-4 app-size-5 app-size-6 app-size-7 app-size-8 app-size-auto',
  'app-span': 'app-span-1 app-span-2 app-span-3 app-span-4 app-span-5',
  'app-height-span': 'app-height-span-2 app-height-span-3 app-height-span-4 app-height-span-5',
  'icon-size':'app-icon-xs app-icon-sm app-icon-md app-icon-lg app-icon-xl',
        'glass': 'glass',
        'square': 'app-square',
        'app-open': ''
 };
    var AppOpenSelect = $('#MyAppTrayControls > #appOpenSelect');
    for(var percent = 50; percent <= 99; percent ++){
     El_CLASSES['app-open'] = El_CLASSES['app-open'] + 'app-open-' + percent + ' ';
       AppOpenSelect.append('<option value="app-open-' + percent+ '">'+percent+'</option>'); 
    }
    
    var changeElClass = function(el, type, added){
        el.removeClass(El_CLASSES[type]).addClass(added);
 }
    
$('#MyAppTrayControls input[name="spacing"]').bind('change',function(){
    changeElClass($('#myAppTray'), 'spacing', $('#MyAppTrayControls input[name="spacing"]:checked').val());
});
    $('#MyAppTrayControls input[name="app-size"]').bind('change',function(){
    changeElClass($('#myAppTray'), 'app-size', $('#MyAppTrayControls input[name="app-size"]:checked').val());
});
    $('#myAppTray').find('> .app').each(function(){
          var app = $(this);
          var appSettingsForm = app.find('> .app-content form.app-settings');
        
          var glassCheckbox = appSettingsForm.find('input[name="glass"]');
          var squareCheckbox = appSettingsForm.find('input[name="square"]');
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
        
    });


 });
