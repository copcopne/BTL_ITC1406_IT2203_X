function loadnav()
{
    fetch("json/nav.json").then(res=>res.json()).then(data=>
        {
            let n=1;
            for(let c of data)
            {
                let h="";
                h+=`<li>
                <a href="${c.link}">${c.text}</a>
                </li>`;
                document.querySelector(".nav .menu").insertAdjacentHTML("beforeend",h);

                //nếu có submenu1 thì chạy dòng này
                if(c.children.length != 0)
                {
                    let temp=`<ul class="submenu1"></ul>`;
                    document.querySelector(`ul.menu > li:nth-child(${n})`).insertAdjacentHTML("beforeend",temp);
                }
                else
                {
                    n++;
                    continue;
                }
                let n1=1;
                for(let c1 of c.children)
                {
                    h = "";
                    h+=`<li>
                    <a href="${c1.link}">${c1.text}</a>
                    </li>`;
                    let e = document.querySelector(`ul.menu > li:nth-child(${n}) > ul`);
                    if(e === null)
                        continue;
                    e.insertAdjacentHTML("beforeend",h);

                    //nếu có submenu2 thì chạy dòng này không thi skip
                    if(c1.children.length != 0)
                    {
                        let temp=`<ul class="submenu2"></ul>`;
                        document.querySelector(`ul.menu > li:nth-child(${n}) > ul.submenu1 > li:nth-child(${n1})`).insertAdjacentHTML("beforeend",temp);
                    }
                    else
                    {
                        n1++;
                        continue;
                    }
                    for(let c2 of c1.children)
                    {
                        h = "";
                        h+=`<li>
                        <a href="${c2.link}">${c2.text}</a>
                        </li>`;
                        let e = document.querySelector(`ul.menu > li:nth-child(${n}) > ul.submenu1 > li:nth-child(${n1}) > ul`);
                        if(e === null)
                            continue;
                        e.insertAdjacentHTML("beforeend",h);
                    }
                    n1++;
                }
                n++;
            }
        })
}
function loadhtmlstruct() {
    $("body").prepend(`
        <header class="head flex">
        <div class ="l-head flex logo">
            <div>
                <a href="index.html">
                    <img class="icon" src="src/logo.png" alt="logo" />
                    <h1  style="font-size:20px;">
                        <span class="sub1">Tận tình</span> - <span class="sub2">Chất lượng</span>
                    </h1>
                </a>
            </div>
            <div class="text">
                <h1 style="font-size:28px;">BỆNH VIỆN MỞ</h1>
                <h2 style="font-size:24px;">THÀNH PHỐ HỒ CHÍ MINH</h2>
            </div>
        </div>
        <div class="r-head flex">
            <div>
                <a href="https://goo.gl/maps/m6bpzZ9u9XM9eWrd8" target="_blank">
                    <address class="highlight">
                        371 Nguyễn Kiệm, Phường 3, Gò Vấp, Thành phố Hồ Chí Minh
                    </address>
                </a>
            </div>
            <div>Giờ làm việc: <span class="highlight">06:00 - 16:30</span></div>
            <div>Liên hệ: <a href="tel:02839300210"><span class="highlight">028 3930 0210</span></a></div>
        </div>
        </header>  
        <nav>
            <div class="nav sticky flex">
                <ul class="menu">
                </ul>
            </div>
        </nav>
    `);
    $("main").append(`<button id="goTop" title="Go to top"><span>TOP</span></button>`);
    $("main").after(`
        <footer class = "flex">
            <p>
                Copyright © Bệnh viện Mở TPHCM
                <br>
                Thiết kế: Nguyễn Trương Quý Sĩ, Đường Dương Thái Tuấn
            </p>
            <hr>
            <p>
                Cơ sở chính: 371 Nguyễn Kiệm, Phường 3, Gò Vấp, Thành phố Hồ Chí Minh
            </p>
        </footer>
`);
    $("#goTop").hide();
    let stickyTop =$(".sticky").offset().top;
    $("#goTop").click(function() {
        $(window).scrollTop(0);
    });
    $(window).scroll(function () {
        let = windowTop = $(window).scrollTop();
        if (stickyTop < windowTop) {
            $(".sticky").css("position", "fixed");
            $("#goTop").show("slow");
            $("main > section:first-child").css("padding-top","50px");
        }
        else {
            $(".sticky").css("position", "relative");  
            $("#goTop").hide("slow"); 
            $("main > section:first-child").css("padding-top","unset");
        }
    }); 
}
window.onload = function()
{
    loadnav();
    loadhtmlstruct();
}