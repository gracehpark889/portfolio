$(".row1").addClass("anim");

$(window).scroll(function() {
    var e = ".hfp_interview",
        hT = $(e).offset().top,
        hH = $(e).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)-400){
        $(e).addClass("anim");
   }
});
$(window).scroll(function() {
    var e = ".hfppersona",
        hT = $(e).offset().top,
        hH = $(e).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)-400){
        $(e).addClass("anim");
   }
});
$(window).scroll(function() {
    var e = ".hfp_swot",
        hT = $(e).offset().top,
        hH = $(e).outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)-400){
        $(e).addClass("anim");
   }
});
