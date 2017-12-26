$( document ).ready(function() {
 var tray = $('#MainTray');
 var cart = $('#cart');
 tray.find('.open-cart').bind('click', function(){
    cart.trigger('app-open');
 });
});
