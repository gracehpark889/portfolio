$(".row1").addClass("anim");

$(window).scroll(function() {
    var e = ".choosr_interview",
        hT = $(e).offset().top,
        hH = $(e).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)-300){
        $(e).addClass("anim");
   }
});
$(window).scroll(function() {
    var e = ".persona_image",
        hT = $(e).offset().top,
        hH = $(e).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)-500){
        $(e).addClass("anim");
   }
});
$(window).scroll(function() {
    var e = ".sketchwire_image",
        hT = $(e).offset().top,
        hH = $(e).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)-500){
        $(e).addClass("anim");
   }
});
$(window).scroll(function() {
    var e = ".designphoto",
        hT = $(e).offset().top,
        hH = $(e).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)-500){
        $(e).addClass("anim");
   }
});



