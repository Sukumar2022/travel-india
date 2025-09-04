const openNav=()=>{
  var navlink=document.querySelector('.navlink');
  navlink.style.display='flex';
  navlink.style.position='fixed';
  navlink.style.height='100vh';
  navlink.style.width='100%';
}
const closeNav=()=>{
  var navlink=document.querySelector('.navlink');
  navlink.style.display='none';
  navlink.style.position='';
  navlink.style.height='0';
  navlink.style.width='0';
}
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      380:{
        slidesPerView: 1,
        spaceBetween: 30,
      },
      430: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      540: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 50,
      },
    }

});



// gsap 
var tl=gsap.timeline();

tl.from(".logo h3",{
    opacity: 0,
    y:  20,
    duration: 1,
    delay:0.5
})

tl.from(".navlink ul ",{
    y: -20,
    opacity: 0,
    duration: 1,
    stagger:0.5
})
tl.from(".navlink button",{
    x: 80,    
    opacity: 0,
    duration: 1,
    stagger:0.5
})

tl.from('.banner-left h1',{
    scale:0, 
})
tl.from('.banner-left p',{
    y: 400
})
tl.from('.banner-right',{
    x: -1800,
    rotate:90,
    duration:1.5
})
gsap.from('.banner2 .title-bar h1',{
    opacity:0,
    duration:4,
    scrollTrigger:{
        trigger:'.banner2 .title-bar h1',
        scroller:"body",
       
        start:"top 80%"
    }
})






