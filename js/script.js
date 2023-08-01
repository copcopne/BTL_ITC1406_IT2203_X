function stickyNav () {

}
function goToTopButton () {
    let button = document.getElementById("goTop");
    window.onscroll = function () {
        if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
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