$( document ).ready(function() {
 var tray = $('#MainTray');
 tray.find('.open-cart').bind('click', function(){
    $('#cart').trigger('app-open');
 });
});
