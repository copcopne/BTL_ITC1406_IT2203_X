function runSlide() {
    $(".photos-container").height($(".photo img").height() + 5); // thiet lap chieu cao cho the photos-container
    let num = $(".photo").length; // so luong hinh
    let h = "";
    for(let i = 0; i < num; ++i)
        h += `<button class="nut" rel=${i + 1}></button>`;
    $(".sliderBtn").html(h); // gan nut dua theo so hinh
    $(".photo:not(:first-child)").hide(); // an 2 hinh con lai chua hinh dau tien
    $(".nut:first-child").addClass("active"); // gan class active cho nut dau tien
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
}

function runScript() {
    $(".layer, .khoa h3").mouseenter(function() {
        $(this).css("opacity",".8");
        $(this).siblings(".layer").css("opacity",".8"); // neu hover vao khu vuc khong phai layer
        $(this).siblings("img").css("transform","scale(0.9)");
        $(this).css("text-decoration","underline"); // khi hover vao text
        $(this).siblings("h3").css("text-decoration","underline"); // khi hover vao vung k phai text
    });
    $(".khoa").mouseleave(function() {
        $(".layer").css("opacity",".5");
        $(".khoa img").css("transform","scale(1)");
        $(".khoa h3").css("text-decoration","unset");
    });
    $(".layer, .khoa h3").click(function(){
        $(this).siblings(".button").click();
    });
}

$(window).on("load",function () {
    runSlide();
    runScript();
});