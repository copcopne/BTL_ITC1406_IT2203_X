$(document).ready(function(){
    $(".q").on("click",function(){
        $(this).parent().find(".a").toggleClass("a-open");
        $(this).find(".arrow").toggleClass("arrow-rotate");
    });
    
});