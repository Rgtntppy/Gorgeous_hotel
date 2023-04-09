const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click',function(){
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});

const pics_src = ["img/room/birdcage-g4d9f7bb1e_640.jpg","img/room/phone-wallpaper-g1f29396d1_640.jpg","img/room/S__2220037.jpg","img/room/S__2220039.jpg"];
let num = -1;

function slideshow_time(){
    if (num === 3){
        num = 0;
    }
    else {
        num ++;
    }
    document.getElementById("slideshow_img").src = pics_src[num];
};

setInterval(slideshow_time, 3000);