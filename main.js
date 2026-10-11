
document.querySelectorAll('[data-carousel]').forEach(section=>{const track=section.querySelector('.track');section.querySelector('[data-prev]').addEventListener('click',()=>track.scrollBy({left:-track.clientWidth*.8,behavior:'smooth'}));section.querySelector('[data-next]').addEventListener('click',()=>track.scrollBy({left:track.clientWidth*.8,behavior:'smooth'}));});
