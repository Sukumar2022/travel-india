
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
tl.from('.banner2 .title-bar h1',{
    x: -1800,
    scrollTrigger:{
        trigger:'.banner2 .title-bar h1',
        scroller:"body",
        markers:true
    }
})




