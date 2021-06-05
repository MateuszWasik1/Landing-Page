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

let quotes = {
    q1:{
        quote: '"Są dwie drogi tworzenia oprogramowania. Jedną jest tworzenie tak prostego kodu, że, w sposób oczywisty, nie ma w nim żadnych braków. Drugą jest tworzenie tak skomplikowanego kodu, że nie ma w nim żadnych oczywistych braków."',
        author: "C.A.R. Hoare",
    },
    q2:{
        quote: '"Zawsze programuj jak gdyby osoba zajmująca się twoim kodem w przyszłości była agresywnym psychopatą, który wie gdzie mieszkasz."',
        author: "Martin Golding",
    },
    q3:{
        quote: '"Większość programistów programuje nie dlatego, że spodziewają się zapłaty lub uwielbienia tłumów, ale dlatego, że programowanie jest dla nich zabawą."',
        author: "Linus Torvalds",
    },
}

let quote = document.querySelector(".quote");
let author = document.querySelector(".author");
let quoteButton = document.querySelectorAll(".slider button")
quote.textContent = quotes.q1.quote
author.textContent = quotes.q1.author
// quoteButton.forEach(btn => {
//     btn.addEventListener("click", ()=>{
//         let btnClassName = btn.className
//         console.log(btnClassName);
//         quote.textContent = quotes.btnClassName.quote
//         author.textContent = quotes.btnClassName.author
//     })
// });
quoteButton.forEach(btn => {
    btn.addEventListener("click", ()=>{
        if(btn.className == "q1"){
            quote.textContent = quotes.q1.quote
            author.textContent = quotes.q1.author
        }else if(btn.className == "q2"){
            quote.textContent = quotes.q2.quote
            author.textContent = quotes.q2.author
        }else if(btn.className == "q3"){
            quote.textContent = quotes.q3.quote
            author.textContent = quotes.q3.author
        }
    })
});
