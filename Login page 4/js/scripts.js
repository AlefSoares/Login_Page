const radioChecked = document.querySelector(".fa-circle-check");
const rememberChecked = document.querySelector(".remember")


radioChecked.addEventListener("click", () => {
  radioChecked.classList.toggle('active')
  remember.classList.toggle('active')
})

rememberChecked.addEventListener("click", () => {
  radioChecked.classList.toggle('active')
})