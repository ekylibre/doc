$("#toggle > li > div").click(function () {
    if (false == $(this).next().is(':visible')) {
        $('#toggle ul').slideUp();        
    }
    var $currIcon=$(this).find("span.the-btn > i")
    $("span.the-btn > i").not($currIcon).addClass('fa-angle-down').removeClass('fa-angle-up');
    $currIcon.toggleClass('fa-angle-down fa-angle-up');
    $(this).next().slideToggle();
    $("#toggle > li > div").removeClass("active");
    $(this).addClass('active');
});