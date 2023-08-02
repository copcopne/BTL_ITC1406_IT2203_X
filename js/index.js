// hien photo
let activeSlide = 1;
showSlide(activeSlide);
function showSlide(photoNumber) {
    let ps = document.getElementsByClassName("photos");
    // neu an next o tam hinh cuoi thi se quay ve tam dau
    if (photoNumber > ps.length) {
        activeSlide = 1;
    }
    // neu an previous o tam hinh dau thi se quay ve hinh cuoi
    if (photoNumber < 1 ) {
        activeSlide = ps.length;
    }
    // an hinh chua hien
    for (let i = 0; i < ps.length; ++i) {
        ps[i].style.display = "none";
    }
    // cho hien anh va set nut
    ps[photoNumber - 1].style.display = "block";
}
function addAction() {
    let n = document.getElementById("next");
    let p = document.getElementById("previous");
    n.addEventListener("click", () => {
        showSlide(activeSlide + 1);
    });
    p.addEventListener("click", () => {
        showSlide(activeSlide - 1);
    });
}