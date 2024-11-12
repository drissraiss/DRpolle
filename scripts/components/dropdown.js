const dropdownButton = document.querySelector(".main__dropdown__button");
const dropdownItems = document.querySelectorAll(".main__dropdown__item");

// show hide drop down list
const toggleDropdown = () => dropdownButton.classList.toggle("main__dropdown__button--active");
const closeDropdownOnClickOutside = (event) => {
    if (!dropdownButton.contains(event.target)) {
        dropdownButton.classList.remove("main__dropdown__button--active");
        document.removeEventListener("click", closeDropdownOnClickOutside);
    }
};

dropdownButton.onclick = () => {
    toggleDropdown();
    if (dropdownButton.classList.contains("main__dropdown__button--active")) {
        document.addEventListener("click", closeDropdownOnClickOutside);
    }
};

// jump between articles
const dropdownButtonTitle = document.querySelector(".main__dropdown__button__title");

dropdownItems.forEach((element) => {
    element.onclick = function () {
        dropdownItems.forEach((el) => el.classList.remove("main__dropdown__item--active"));
        this.classList.add("main__dropdown__item--active");
    };
});

// function for update dropdown button while scrolling in the page
function updateDropdownButton() {
    const articles = document.querySelectorAll(".main__articles__item");

    let scrollMarginTtop = window.innerWidth <= 960 ? 140 : 155;
    let found = false;

    articles.forEach((article, index) => {
        const rect = article.getBoundingClientRect();
        const articleTop = rect.top;

        // Check if article is in the viewport
        if (articleTop && articleTop - scrollMarginTtop >= -rect.height) {
            if (!found) {
                dropdownItems.forEach((el) => el.classList.remove("main__dropdown__item--active"));
                dropdownItems[index].classList.add("main__dropdown__item--active");
                dropdownButtonTitle.innerHTML = article.dataset.title;
                dropdownButtonTitle.title = article.dataset.title;
                found = true;
            }
        }
    });
}
updateDropdownButton();

window.onscroll = () => {
    show_hide_button_scroll();
    updateDropdownButton();
};
