function openMenu(){
    let hide = $(".menu").hasClass("hidden") ? 1 : 0
    if(hide)
    {
        $(".nav").toggle();
        $(".menu").toggleClass("hidden");
        $(".menu").toggleClass("appear");
    }
    else
    {
        $(".menu").toggleClass("appear");
        $(".menu").toggleClass("hidden");
    }
}