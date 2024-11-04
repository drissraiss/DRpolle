window.onload = () => {
    toggle_part2_of_logo();
};
const btn_scroll_top = document.querySelector(".scroll_top");
const appointment = document.getElementById("appointment");
// for show/hide button scroll to top of page
window.onscroll = () => {
    toggle_part2_of_logo();
    if (window.scrollY >= 400) {
        btn_scroll_top.classList.remove("hide")
        appointment.classList.add("offset_to_left")
    } else {
        btn_scroll_top.classList.add("hide")
        appointment.classList.remove("offset_to_left")
    }
};

btn_scroll_top.onclick = () => {
    window.scrollTo(0, 0);
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

// for show/hide nav links
const hamburger_btn = document.querySelector(".header_main .btn_menu .hamburger_btn ");
const btn_menu = document.querySelector(".header_main .btn_menu ");

const close_nav = (e) => {
    if (!e.target.closest("header")) {
        toggle_nav();
    }
};
function toggle_nav() {
    hamburger_btn.classList.toggle("active");
    if (hamburger_btn.classList.contains("active")) {
        document.querySelector("main").style.filter = "blur(2.5px)";
        document.querySelector("footer").style.filter = "blur(2.5px)";
        document.querySelector("body .links").style.filter = "blur(2.5px)";
        document.querySelector("nav").classList.remove("hide")
        document.querySelector("svg.part2_of_logo").classList.add("hide");
        document.body.addEventListener("click", close_nav);
    } else {
        document.querySelector("main").style.filter = "none";
        document.querySelector("footer").style.filter = "none";
        document.querySelector("body .links").style.filter = "none";
        document.querySelector("nav").classList.add("hide")
        document.body.removeEventListener("click", close_nav);
        toggle_part2_of_logo();
    }
}
btn_menu.onclick = toggle_nav;

/// for expend/compress li of nav links
const li_nav = document.querySelectorAll("nav .nav ul li");
li_nav.forEach((element) => {
    element.onclick = function (e) {
        /*
        this test for handle this problem
        when press the second li inside the first li,
        the press is counted as the first one.
        */
        if (e.target !== this) return null;
        if (this.classList.contains("plus")) {
            this.classList.replace("plus", "minus");
            const other_li = this.parentElement.children;
            for (const element of other_li) {
                element.style.opacity = 0.5;
            }
            this.style.opacity = 1;
        } else if (this.classList.contains("minus")) {
            this.classList.replace("minus", "plus");
            const other_li = this.parentElement.children;
            for (const element of other_li) {
                element.style.opacity = 1;
            }
        }
    };
});

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

// show form add respond in list comments
const buttons_respond = document.querySelectorAll("main section.s4 .header_comment .respond");
const form_comment = document.getElementById("form-comment");
buttons_respond.forEach((e) => {
    e.onclick = function () {
        this.parentElement.parentElement.parentElement.insertAdjacentElement("afterend", form_comment);
        form_comment.style.display = "block";
        document.querySelector("#form-comment textarea").focus();
        show_all_comments();
    };
});

// show all comments
const btn_show_all_comments = document.querySelector("main section.s4 .btn_show_all_comments");
btn_show_all_comments.onclick = show_all_comments;
function show_all_comments() {
    btn_show_all_comments.style.display = "none";
    document.querySelector("main section.s4 .comments").classList.remove("show-few");
}

// button search box
const btn_search_box = document.getElementById("btn_search_box");
const inupt_search_box = document.getElementById("inupt_search_box");
btn_search_box.onclick = () => {
    hamburger_btn.click();
    inupt_search_box.focus();
};

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

setTimeout(() => {
    document.body.classList.remove("preload");
}, 700);