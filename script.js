
// menuToogle
let toogle = document.querySelector(".toogle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toogle.addEventListener("click", ()=>{
    navigation.classList.toggle("active");
    main.classList.toggle("active");
})



// add "hovered" class on selected item
let list = document.querySelectorAll(".navigation li")

function activeLink(){
    list.forEach((item)=> {
        item.classList.remove("hovered")})
    this.classList.add("hovered");
}

list.forEach((item)=>{ 
    item.addEventListener("mouseover", activeLink)
})