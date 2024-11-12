window.onload = () => {
    toggle_part2_of_logo();
    add_slide_1()
    add_slide_2()
};
// for show/hide part 2 of logo
function toggle_part2_of_logo() {
    const part2_of_logo = document.querySelector(".part2_of_logo");
    const logo = document.querySelector(".logo");
    if (!window.scrollY) {
        part2_of_logo.classList.add("show");
        part2_of_logo.classList.remove("hide");
        logo.classList.remove("top0");
    } else {
        part2_of_logo.classList.add("hide");
        part2_of_logo.classList.remove("show");
        logo.classList.add("top0");
    }
}


// change image screen on hover
const articles = document.querySelectorAll("main .cont-3 .control > article");
const img_screen = document.querySelector("main .cont-3 .screen img");
articles.forEach((element) => {
    element.addEventListener("mouseover", () => {
        articles.forEach((e) => e.classList.remove("active"));
        element.classList.add("active");
        img_screen.src = element.querySelector("img").src;
    });
});



// slider automatique
const articles_s5 = document.querySelectorAll("main .cont-5 .sec-2 article");
let i_s5 = 0;
const active_article = (i) => {
    articles_s5.forEach((element) => {
        element.classList.remove("active");
    });
    articles_s5[i].classList.add("active");
};
setInterval(() => {
    active_article(i_s5++);
    if (i_s5 == 3) i_s5 = 0;
}, 5000);




// show slide in mode phone
window.addEventListener("resize", function () {
    add_slide_1()
    add_slide_2()
})
// slide 1
var swiper_1;
let cont2__swiper =  document.getElementById("cont-2__swiper")
let cont2__swiper__content = cont2__swiper.innerHTML
function add_slide_1() {
    var width_screen = window.innerWidth
    if(width_screen <= 960){
        cont2__swiper.classList.add("cont-2__swiper");
        swiper_1 = new Swiper(".cont-2__swiper", {
            spaceBetween: 30,
            pagination: {
                el: ".cont-2__swiper-pagination",
                clickable: true,
            },/* 
            autoplay: {
                delay: 3000, 
            },*/
            loop: true 
            });
        
    }else{
        if(swiper_1){
            swiper_1.destroy(true, true);
            swiper_1 = null;
            cont2__swiper.innerHTML = cont2__swiper__content
        }
    }
}
// slide 2
var swiper_2;
let s3__swiper =  document.getElementById("s3__swiper")
let s3__swiper__content = s3__swiper.innerHTML
function add_slide_2() {
    var width_screen = window.innerWidth
    if(width_screen <= 960){
        s3__swiper.classList.add("s3__swiper");
        swiper_2 = new Swiper(".s3__swiper", {
            spaceBetween: 30,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },/* 
            autoplay: {
                delay: 3000, 
            }, */
            loop: true

            });
        
    }else{
        if(swiper_2){
            swiper_2.destroy(true, true);
            swiper_2 = null;
            s3__swiper.innerHTML = s3__swiper__content
        }
    }
}