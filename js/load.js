function loadnav()
{
    fetch("json/nav.json").then(res=>res.json()).then(data=>
        {
            let n=2;
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
        if (window.pageYOffset >= sticky) {
            n.classList.add("sticky");
        } else {
            n.classList.remove("sticky");
        }

    }
    button.addEventListener("click", () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    });
}
window.onload = function()
{
    loadnav();
    goToTopButton();
}