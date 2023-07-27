"use strict";

let img = document.querySelector(".imagen");
img.src = "./img/c3-slim-pluss.png"

let mq = matchMedia("(max-width: 1000px)");



mq.addEventListener("change",()=>{
    // mq.matches ? img.src = "./img/c3-slim-pluss.png" : img.src = "./img/c3.png";

    console.log(mq.matches)
  
})

