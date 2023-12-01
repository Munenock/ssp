const footer=document.getElementsByTagName('footer');
const footTarget=document.querySelectorAll ('.footTarget')

new IntersectionObserver(entries=>{
  if(entries[0].isIntersecting){
 doTheAnime()
}
  else{
    reverse()
  }
},{
  threshold:.7
}).observe(footer[0])

function doTheAnime(){
  footTarget.forEach(f=>{
    f.classList.add('doTheAnime')
  })
}
function reverse(){
  footTarget.forEach(f=>{
    f.classList.remove('doTheAnime')
  })
}
