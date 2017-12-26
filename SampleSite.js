$( document ).ready(function() {
 var tray = $('#MainTray');
 var cart = $'#cart');
 $('.open-cart').bind('click', function(){
    tray.trigger('app-open', cart);
 });
});
