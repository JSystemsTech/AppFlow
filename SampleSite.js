$( document ).ready(function() {
 var tray = $('#MainTray');
 console.log(tray.find('.open-cart'));
 tray.find('.open-cart').bind('click', function(){
    $('#cart').trigger('app-open');
 });
});
