function openMenu(){
    $(".nav").toggleClass("hidden");
    $(".nav").toggleClass("appear");
    $(".overlay").toggle();
    $(".overlay").toggleClass("fadein");
}
$(document).on("click",".menu a",function(event){
    if($(window).width()<=800)
            $(event.target).parent().children("ul").toggle();
})

$(document).on("resize ready",function(){
    if($(window).width() <= 800)
        $(".menu ul").attr("style", "display:none");
})
