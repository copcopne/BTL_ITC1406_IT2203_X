/* go to top*/
function scrollFunction()
{
    let goTop = document.getElementById("goTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
        goTop.style.display = "block";
    else
        goTop.style.display = "none";
}
window.onscroll = scrollFunction();
function goToTop()
{
    window.scrollTo({top: 0, behavior: 'smooth'});
}
