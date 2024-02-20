// make a bar on
let bar = document.querySelector(".fa-bars");

bar.addEventListener("click",(el)=>{
    const  list  = document.querySelector(".list");
    list.style.left = "50%" 
})

let xButton= document.querySelector(".fa-x")

xButton.addEventListener("click",()=>{
    const  list  = document.querySelector(".list");
    list.style.left = "200%"
})

// slider image

const imgsBoxs = document.querySelectorAll(".container-they-sayed > div")

const slider = document.querySelectorAll(".they-sayed .list li")

slider.forEach((el,index)=>{
    el.addEventListener("click",(e)=>{
        slider.forEach(ele=>{
            ele.classList.remove("active")
            
        })
        imgsBoxs.forEach(img=>{
            img.classList.remove("active")
            
        })
        imgsBoxs[index].classList.add("active")
        el.classList.add("active")
    })
    
})
