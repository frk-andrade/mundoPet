const carousel = new bootstrap.Carousel('#myCarousel')

const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  wrap: false
})