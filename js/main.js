"use strict"

let galleryParagraph = document.querySelector(".galleryParagraph")
let hiddenGallery = document.querySelector("#hG");
let hiddenSection  = document.querySelector(".hiddenSection")
galleryParagraph.addEventListener("click", ()=>{
    hiddenSection.classList.toggle("galleryHeight");
})

let galleryImg = document.querySelectorAll(".gallery img")
let hiddenGalleryImg = document.querySelectorAll(".hiddenGallery img")
galleryImg.forEach(el => {
    el.addEventListener("click", ()=>{
        console.log(el);
    })
});
hiddenGalleryImg.forEach(el => {
    el.addEventListener("click", ()=>{
        console.log(el);
    })
});

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