const music = document.getElementById("music")

window.onload = () => {

music.volume = 1
music.play()

setTimeout(()=>{

document.querySelector(".flash").style.display="none"

},2000)

setTimeout(()=>{

document.getElementById("intro").style.opacity="0"

setTimeout(()=>{

document.getElementById("intro").style.display="none"

document.getElementById("portfolio").style.opacity="1"

music.volume = 0.2

},1500)

},7000)

}


const light = document.getElementById("cursor-light")

document.addEventListener("mousemove", e=>{

light.style.left = e.clientX + "px"
light.style.top = e.clientY + "px"

})


function reveal(){

let reveals = document.querySelectorAll(".reveal")

for(let i=0;i<reveals.length;i++){

let windowHeight = window.innerHeight
let elementTop = reveals[i].getBoundingClientRect().top

if(elementTop < windowHeight - 100){

reveals[i].classList.add("active")

}

}

}

window.addEventListener("scroll", reveal)
