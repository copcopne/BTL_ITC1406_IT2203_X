function stickyNav () {

}
function goToTopButton () {
    let button = document.getElementById("goTop");
    window.onscroll = function () {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            button.style.display = "block";
        } else {
            button.style.display = "none";
        }
    }
    button.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}
window.onload = function () {
    stickyNav();
    goToTopButton();
}