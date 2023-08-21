function openMenu(){
    $(".nav").toggleClass("hidden");
    $(".nav").toggleClass("appear");
    if($(".nav").hasClass("appear") === true) {
        setTimeout(()=>{
            $(".overlay").toggle();
            $(".overlay").toggleClass("fadein");
        }, 500);
    }
    else {
        $(".overlay").toggle();
        $(".overlay").toggleClass("fadein");
    }
}
$(document).on("click",".menu a",function(event){
    if($(window).width()<=800)
            $(event.target).parent().children("ul").toggle();
})
$(document).on("click",".overlay",function () {
    openMenu();
})

