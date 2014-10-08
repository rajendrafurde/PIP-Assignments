$(document).ready(function(){

    $(".cycle-slideshow img").fullScreenImage({
        imageHeight: 		650,
        imageWidth: 		1180,
        verticalPosition:   'center',
        horizontalPosition:   'right'
    });

    /*gallery listing*/
    $('.gallery ul li:nth-child(3n+1)').addClass("abc");

    // Init Skrollr
  var s = skrollr.init({
  });
// Refresh Skrollr after resizing our sections
  s.refresh($('.homeSlide'));

$(".scrollThis").each(function() {
        $(this).click(function(e) {
            var a = $(this).attr("href").replace("#", ""),
                a = $("#" + a).offset();
            $(this).addClass('active');
            $(".scrollThis").removeClass('active');
            $(this).addClass('active');
            $("html,body").animate({
                scrollTop: a.top
            }, 1500);
            e.preventDefault();
        });
    });
});

$(window).trigger('resize');

$(window).load(function(){
    var windowHeight = $(window).height();
     var pageHeight = windowHeight + 100;
     $(".mainSlide").css({minHeight:pageHeight});
//    console.log(pageHeight);
});