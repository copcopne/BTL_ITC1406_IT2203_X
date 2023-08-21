function openMenu(){
    $(".nav").toggleClass("hidden");
    $(".nav").toggleClass("appear");
    $(".overlay").toggle();
    $(".overlay").toggleClass("fadein");
}
$(document).on("click",".menu a",function(event){
    $(event.target).parent().find("ul").toggle();
})
