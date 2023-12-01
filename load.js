
  const loader=document.querySelector('.preLoader')
window.addEventListener('load',()=>{
  loader.style.display='none'

})

fetch('pics.json')
  .then(res => {
    return res.json()
  })
  .then((data) => {

    var pictures = data

    pictures.forEach(p => {
      partyAnimalsNames.push(p[0])
    })
})