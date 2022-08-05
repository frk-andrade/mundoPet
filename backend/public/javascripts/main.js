/* const carousel = new bootstrap.Carousel('#myCarousel')

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
}) */


/* const myModal = document.getElementById('myModal')
const myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', () => {
  myInput.focus()
}) */

const link = document.querySelectorAll(".nav-link")

function trocou(event){
  event.currentTarget.classList.add('ativo')
}

link.forEach(clicou => {
  clicou.addEventListener("click", trocou)
})