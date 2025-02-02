const hamburger = document.querySelector(".open-sidebar");
const menu = document.querySelector(".nav-list");
const item=document.querySelector(".nav-items");
const over=document.querySelector("#overlay");
hamburger.addEventListener("click",
    () => {
        menu.classList.toggle("active");
    }
)

item.addEventListener("click",()=>{
    menu.classList.remove("active");
})

