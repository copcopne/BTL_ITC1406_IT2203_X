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
    // man hinh load
    setTimeout(()=>{
        $(".loading").addClass("fadeoutClass");
    }, 400);
    setTimeout(function() {
        $(".loading").hide();
        $(".loading").removeClass("fadeoutClass");
    }, 900);

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
                <h1>BỆNH VIỆN MỞ</h1>
                <h2>THÀNH PHỐ HỒ CHÍ MINH</h2>
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
                <div class="menu-containers">
                <a class="menu-container" href="javascript:;">
                <div></div>
                <div></div>
                <div></div>
                </a>
                </div>
            </div>
        </nav>
    `);
    $("main").append(`
    <button id="goTop" title="Go to top"><span>TOP</span></button>
    `);
    $("body").append(`
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
    $("footer").before(`
        <prefooter class="flex">
            <div class="left-pf wow animate__backInLeft">
                <h3 class="highlight">BỆNH VIỆN MỞ TP.HCM</h3>
                <span>
                    Địa chỉ: <span class="highlight">371 Nguyễn Kiệm, Phường 3, Gò Vấp, Thành phố Hồ Chí Minh</span>
                </span>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.925119628487!2d106.6771076!3d10.8170424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528e1f241211f%3A0xc9ef195798144b1f!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBN4bufIFRQLkhDTSAtIEPGoSBz4bufIDM!5e0!3m2!1svi!2s!4v1692449822367!5m2!1svi!2s" width="500" height="500" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
            <div class="right-pf wow animate__backInRight">
                <h3 class="highlight">HỖ TRỢ VÀ GIẢI ĐÁP</h3>
                <span>
                    Liên hệ: <span><a class="highlight" href="tel:02839300210">02839300210</a></span>
                </span>
                <div>
                    <img src="src/support.png" alt="HỖ TRỢ">
                </div>
            </div>
        </prefooter>
    `);

    $("#goTop").hide();
    let stickyTop =$(".sticky").offset().top + 70;
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
            $("main > :first-child").css("padding-top","unset");
        }
    }); 
}
window.onload = function()
{
    loadhtmlstruct();
    loadnav();
}