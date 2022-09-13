//Barra de scroll
let progress = document.getElementById("barra")
let totalHeight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + "%";
}

//Header

let bg = document.getElementById("bg");
let moon = document.getElementById("moon");
let mountain = document.getElementById("mountain");
let road = document.getElementById("road");
let text = document.getElementById("text");
let text2 = document.getElementById("text2");

window.addEventListener('scroll', function(){
    
    let value = window.scrollY;
    bg.style.top = value * 0.5 + 'px';
    moon.style.left = -value * 0.5 + 'px';
    mountain.style.top = -value * 0.15 + 'px';
    road.style.top = value * 0.15 + 'px';
    text.style.top = value * 1 + 'px';
    text2.style.top = value * 1 + 'px';

})

