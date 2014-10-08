jQuery(document).ready(function(){
  //alert('hi');
    function resizeImage(){
    var fullScreenImage = jQuery('#metaslider_73 ul.slides li img');
    var imageHeight = 730;
    var imageWidth =  1600;
    var windowHeight = jQuery(window).height() - 70;
    var windowWidth = jQuery(window).width();
    var heightDifference;
    var widthDifference;
    var imageHeightMinus;
    jQuery('#metaslider_73, #metaslider_73 ul.slides li').css({
        height:windowHeight,
        width:windowWidth
    })
    if(imageHeight <= windowHeight){
        heightDifference = windowHeight - imageHeight;
    }else{
        heightDifference = imageHeight - windowHeight;
    };
    if(imageWidth <= windowWidth){
        widthDifference = windowWidth - imageWidth;
    }else{
        widthDifference = imageWidth - windowWidth;
    }
    if(widthDifference <= heightDifference){
        var imageNewWidth = (windowHeight / imageHeight)*imageWidth;
        if(imageNewWidth < windowWidth){
            var imageNewHeight = (windowWidth / imageWidth)*imageHeight;
            var imageTopMinusMargin = -((imageNewHeight - windowHeight)/2);
            fullScreenImage.css({
                height:imageNewHeight,
                width:windowWidth,
                top:imageTopMinusMargin,
                left:0
            })

        }else{
        var imageLeftMinusMargin = -((imageNewWidth - windowWidth)/2);
        fullScreenImage.css({
            height:windowHeight,
            width:imageNewWidth,
            left:imageLeftMinusMargin,
            top:0
        })
        }
    }else{
        var imageNewHeight = (windowWidth / imageWidth)*imageHeight;
        if(imageNewHeight < windowHeight){
            var imageNewWidth = (windowHeight / imageHeight)*imageWidth;
            var imageLeftMinusMargin = -((imageNewWidth - windowWidth)/2);
            fullScreenImage.css({
                height:windowHeight,
                width:imageNewWidth,
                left:imageLeftMinusMargin,
                top:0
            })

        }else{
        var imageTopMinusMargin = -((imageNewHeight - windowHeight)/2);
        fullScreenImage.css({
            height:imageNewHeight,
            width:windowWidth,
            top:imageTopMinusMargin,
            left:0
        })
        }
    }
    }
    resizeImage();
    jQuery(window).resize(function(){
        resizeImage();
    })
});