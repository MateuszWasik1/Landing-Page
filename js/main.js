'use strict'

let galleryParagraph = document.querySelector(".galleryParagraph")
let hiddenGallery = document.querySelector("#hG");
let hiddenSection  = document.querySelector(".hiddenSection")
galleryParagraph.addEventListener("click", ()=>{
    hiddenGallery.classList.toggle("hidden");
    hiddenSection.style.display = "block"
})

let video = document.querySelector("video");
let player = document.querySelector(".player")
player.addEventListener("click", ()=>{
    if(player.getAttribute("id") === "pause"){
        video.play();
        player.setAttribute("id", "play");
        player.setAttribute("class", "player fas fa-pause");
    }else if(player.getAttribute("id") === "play"){
        video.pause();
        player.setAttribute("id", "pause");
        player.setAttribute("class", "player fas fa-play");
    }
})