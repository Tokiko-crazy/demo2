$(function () {
    $(".pic").hover(function () {      
            $(".pic").css("transform","scale(1.03,1.06)")
            $(".pic").css('transition',"1s")
            $(".out").css("z-index","222")
        }, function () {
            // out
            $(".pic").css("transform","scale(1) ");
            
        }
    );
});