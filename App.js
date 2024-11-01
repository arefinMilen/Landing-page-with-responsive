// using animation for navbar 
gsap.to(".gsap-nav",{
    x:-1200,
    duration:7,
    delay:0.5,
    repeat:-1,
})

// responsive menubar 
const menuIcon = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuIcon.addEventListener("click", ()=>
{
    console.log("button is clicked")
    if(menu.className ==="hidden")
    {
        menu.classList.remove("hidden");
    }
    else {
        menu.classList.add("hidden");
    }
});