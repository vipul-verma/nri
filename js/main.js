
$(document).ready(function(){
    $("#sticker").sticky({topSpacing:0});
    new WOW().init();

    var x = $('.clipImg').offset();
    $(".clipImg").elevateZoom({
        zoomWindowOffetx: -300,
        zoomWindowOffety: -25
    });    
});