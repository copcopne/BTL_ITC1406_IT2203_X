$(document).ready(function() {
    $(window).scroll(function() {
        var show = 100;
        if($(this).scrollTop() > show) {
            $('#goTop').fadeIn();
        } else {
            $('#goTop').fadeOut();
        }
    });
    $('#goTop').click(function() {
        $('html, body').animate({scrollTop : 0}, 0);
        return false;
    });
});
