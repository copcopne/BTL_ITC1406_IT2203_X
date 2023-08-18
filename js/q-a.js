$(document).ready(function(){
     fetch("json/q-a.json").then(res=>res.json()).then(data => {
        for (let d of data)
        {
            let h = `
            <li>
            <div class = "q">
                <span class = "arrow"></span>
                <span>${d.question}</span>
            </div>
            <div class="a"><pre>${d.answer}</pre></div>
            </li>`
            if(d === null) continue;
            $(".faq").append(h);
        }
     })
     $(document).on("click",".q",function(){
        $(this).parent().find(".a").toggleClass("a-open");
        $(this).find(".arrow").toggleClass("arrow-rotate");
    });
});