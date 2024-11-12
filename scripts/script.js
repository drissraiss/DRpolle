
const btn_scroll_top = document.querySelector(".scroll_top");
const appointment = document.getElementById("appointment");
// for show/hide button scroll to top of page
const show_hide_button_scroll = () => {
    if (window.scrollY >= 400) {
        btn_scroll_top.classList.remove("hide")
        appointment.classList.add("offset_to_left")
    } else {
        btn_scroll_top.classList.add("hide")
        appointment.classList.remove("offset_to_left")
    }
}
window.onscroll = () => {
    try {
        toggle_part2_of_logo()
    } catch(e){}
    show_hide_button_scroll()
};

btn_scroll_top.onclick = () => {
    window.scrollTo(0, 0);
};


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
        try {
            toggle_part2_of_logo();
        }catch (e){}
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


// show form add respond in list comments
const buttons_respond = document.querySelectorAll("section.s4 .header_comment .respond");
const form_comment = document.getElementById("form-comment");
buttons_respond.forEach((e) => {
    e.onclick = function () {
        this.parentElement.parentElement.parentElement.insertAdjacentElement("afterend", form_comment);
        /* form_comment.classList.remove("show_form_respond"); */
        form_comment.classList.add("show_form_respond"); 
        
        document.querySelector("#form-comment textarea").focus();
        show_all_comments();
    };
});
let form_comment__closeBtn =  document.querySelector(".form-comment__closeBtn")
if(form_comment__closeBtn){
    form_comment__closeBtn.onclick = () => {
        form_comment.classList.remove("show_form_respond")
    }
}
// show all comments
const btn_show_all_comments = document.querySelector("section.s4 .btn_show_all_comments");
if(btn_show_all_comments){
    btn_show_all_comments.onclick = show_all_comments;
}
function show_all_comments() {
    btn_show_all_comments.style.display = "none";
    document.querySelector("section.s4 .comments").classList.remove("show-few");
}

// button search box
const btn_search_box = document.getElementById("btn_search_box");
const inupt_search_box = document.getElementById("inupt_search_box");
btn_search_box.onclick = () => {
    hamburger_btn.click();
    inupt_search_box.focus();
};

// reset transition in reload page
setTimeout(() => {
    document.body.classList.remove("preload");
}, 700);
