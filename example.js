
$( document ).ready(function() {
    var TRAY_CLASSES = {
  spacing: 'spacing-1 spacing-2 spacing-3 spacing-4 spacing-5',
  'app-size': 'app-size-1 app-size-2 app-size-3 app-size-4 app-size-5 app-size-6 app-size-7 app-size-8 app-size-auto'
 }
    var changeTrayClass = function(tray, type, added){
        tray.removeClass(TRAY_CLASSES[type]).addClass(added);
 }
    
$('#MyAppTrayControls input[name="spacing"]').bind('change',function(){
    changeTrayClass($('#myAppTray'), 'spacing', $('#MyAppTrayControls input[name="spacing"]:checked').val());
});
    $('#MyAppTrayControls input[name="app-size"]').bind('change',function(){
    changeTrayClass($('#myAppTray'), 'app-size', $('#MyAppTrayControls input[name="app-size"]:checked').val());
});
 
 });
