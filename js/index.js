$(document).ready(function () {
    
    function checkImg(url) { // ham kiem tra neu ton tai anh trong source
        let img = new Image(); // tao bien img
        img.src = url; // gan src cho anh
        return img.height ; // neu khong co anh trong thu muc thi chieu cao anh se = 0 => tra ve false va nguoc lai
    }
    let x = 1; // anh dau tien
    let hx ="";
    let len = 0;
    while(checkImg(`src/slideshow/${x}.png`) !== 0) {
        hx += `
            <div class="photo animate__animated">
                <img src="src/slideshow/${x}.png" alt="Bệnh viện Mở TPHCM" />
            </div>
        `;
        let temp = checkImg(`src/slideshow/${x}.png`);
        if (len < temp)
            len = temp;
        x++;
    }
    $(".photos-container").html(hx);
    $(".photos-container").height((len * 0.75) + 5); // thiet lap chieu cao cho the photos-container
    hx =""; // reset lai bien xem coi no co chay ko :)))
    hx += `
        <a id="next" href="javascript:;">&#10095;</a>
        <a id="previous" href="javascript:;">&#10094;</a>
    `;
    $(".photos-container").append(hx); // them vao sau 



    let num = $(".photo").length; // so luong hinh
    let h = "";
    for(let i = 0; i < num; ++i)
        h += `<button class="nut" rel=${i + 1}></button>`;
    $(".sliderBtn").html(h); // gan nut dua theo so hinh
    $(".photo:not(:first-child)").hide(); // an 2 hinh con lai chua hinh dau tien
    $(".nut:first-child").addClass("active"); // gan class active cho nut dau tien
    //$(".photos-container").height($(".photo img").height() + 5); // thiet lap chieu cao cho the photos-container
    let show = (current) => {
        $(".photo").hide(); // an toan bo hinh
        $(".photo").eq(current).show(); // hien hinh thu current
        $(".nut").removeClass("active"); // go class active cho nut hien tai
        $(".nut").eq(current).addClass("active"); // them class active cho nut thu current
    };
    let current = 0; // anh dau tien
    $("#next").click(function () {
        current++;
        if (current === num) // neu current vuot qua so luong anh
            current = 0; // set current ve lai thanh vi tri anh dau tien
        show(current);
        clearInterval(timer); // xoa thoi gian cho hinh tu dong chuyen
        runSlider(); // thiet lap lai tu dong chuyen
    });
    $("#previous").click(function () {
        current--;
        if (current < 0)
            current = num - 1; // set current ve vi tri anh cuoi cung
        show(current);
    });
    $(".nut").click(function() {
        current = parseInt($(this).attr("rel") - 1);
        show(current);
        clearInterval(timer); // xoa thoi gian cho hinh tu dong chuyen
        runSlider(); // thiet lap lai tu dong chuyen
    });
    let timer = null;
    let runSlider = () => {
        timer = setInterval(() => {
            $("#next").click();
        }, 3000); // 3 giay chuyen anh 1 lan
    };
    runSlider();

});