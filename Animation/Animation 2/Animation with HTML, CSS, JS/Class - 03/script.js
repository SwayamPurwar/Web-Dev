var tl = gsap.timeline({
  scrollTrigger:{
      trigger:'#page2',
      markers:true ,
      start:'top 45%',
      end:'top 30%',
      scrub:1
  }
})

tl.from('#box',{
  x:-500,
  duration:0.5,
  opacity:0 ,
},'a')

tl.from('#star',{
  x:500,
  duration:0.5,
  opacity:0 ,
},'a')

tl.from('#circle',{
  scale:0,
  duration:0.5,
  opacity:0,
})