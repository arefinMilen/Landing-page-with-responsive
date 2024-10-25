// function changeImage(x,image)
// {
//     if(x == 1)
//     {
//         image.src = 'coconut-water-collection-image_v2_690x.webp';
//     }
//     if(x == 2)
//     {
//         image.src = '/photo/coconut-water-hover.jpg';
//     }
// 
gsap.to(".gsap-nav",{
    x:-1200,
    duration:7,
    delay:0.5,
    repeat:-1,
})

const menuIcon = document.getElementById("menu-btn")
const menu = document.getElementById("menu")

menuIcon.addEventListener("click",()=>
{
    if(menu.className == "hidden")
    {
        menu.classList.remove("hidden");
    }
    else {
        menu.classList.add("hidden");
    }
});