$(document).ready(function(){
    $(".submit").on("click",function(){
        let inputs = $("input:not(.submit), select, textarea");
        let n = 0;
        let valid = true;
        for(let i of inputs)
        {
            if(i.hasAttribute('required') && i.value.length == 0)
            {
                i.focus();
                valid = false;
                break;
            }
        }
        if (valid)
        $("form").submit();
    })
   })