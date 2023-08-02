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
        //javascript cho navigation
        let n = document.getElementsByClassName("nav");
        let sticky = n.offsetTop;
        if(window.pageYOffset >= sticky) {
            n.classList.add("sticky");
        } else {
            n.classList.remove("sticky");
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