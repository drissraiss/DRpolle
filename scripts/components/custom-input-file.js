// for custom input upload file in form contact
const fileInput = document.querySelector(".main__contact__form__group-document__input")
const fileInputInfo = document.querySelector(".main__contact__form__group-document__info")
const fileInputBtnDocument = document.querySelector(".main__contact__form__group-document__btn-document")
fileInputBtnDocument.onclick = () => fileInput.click();


fileInput.addEventListener("change", event => {
    const fileName = event.target.files[0].name || "Aucun fichier choisi";
    fileInputInfo.textContent = fileName;
})