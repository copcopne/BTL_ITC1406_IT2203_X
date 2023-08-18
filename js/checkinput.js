$(document).ready(function(){
    $(".submit").on("click",function(){
        let inputs = $("input:not(.submit), select, textarea"); //các nút
        let valid = true; //kiểm tra rỗng
        for(let i of inputs) //kiểm tra từng nút
        {
            if(i.hasAttribute('required') && i.value.length == 0) //nếu required và rỗng
            {
                i.classList.add("alert"); //thêm class để bật hiệu ứng
                i.focus();
                i.addEventListener('animationend',() => { //xóa class khi hiệu ứng end
                    i.classList.remove("alert");
                })
                valid = false;
                break;
            }
        }
        if(valid) 
        $("form").submit();
    })
   })