$( document ).ready(function() {
 var tray = $('#MainTray');
 var cart = tray.find('#cart');
 $('.open-cart').bind('click', function(){
    tray.trigger('app-open', cart);
 });
});
