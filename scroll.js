var container = document.querySelector('.container')
var royalPics = document.querySelector('.royalPics')

container.scrollBy({
  left: localStorage.getItem('top'),
  behavior: "smooth"
});
container.addEventListener("scroll", (e) => {
  localStorage.setItem('top', e.target.scrollLeft)
})


royalPics.scrollBy({
  top: localStorage.getItem('top'),
  behavior: "smooth"
});
royalPics.addEventListener("scroll", (e) => {
  localStorage.setItem('p2top', e.target.scrollTop)
})