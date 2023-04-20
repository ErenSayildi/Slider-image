let Panels = document.querySelectorAll(".panel");

Panels.forEach(function(panel)
{
    panel.addEventListener("click",function Tıkla()
    {
        removeActiveClass()
        panel.classList.add("active");
    });
});


function removeActiveClass()
{
    Panels.forEach(function removes(panel)
    {
        panel.classList.remove("active");
    });
}