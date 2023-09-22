var MenuItems = document.getElementById("MenuItems");
let icon = document.querySelector("#iconMenu")

let count = true;
icon.addEventListener("click",() =>{
    console.log("ok")
    if(count === true){
        MenuItems.style.display = 'none'
        count =false
    }else{
        count =true
        MenuItems.style.display = 'block'
    }
})  