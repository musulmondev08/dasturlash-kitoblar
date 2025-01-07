let burger = document.querySelector(".burger")
let orqaga = document.querySelector(".orqaga")
let modal = document.querySelector(".modal")

burger.addEventListener("click", ()=>{
  modal.classList.add("show")
})
orqaga.addEventListener("click", ()=>{
  modal.classList.remove("show")
})

