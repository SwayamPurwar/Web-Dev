var tl = gsap.timeline()

tl.to('#box',{
    x:900,
    duration:2,
})

tl.to('#circle',{
    x:900,
    duration:2
})


tl.pause()


var btn1 = document.querySelector('#Start')
var btn2 = document.querySelector('#Pause')
var btn3 = document.querySelector('#Restart')

btn1.addEventListener('click',function(){
    tl.play()
})

btn2.addEventListener('click',function(){
    tl.pause()
})

btn3.addEventListener('click',function(){
    tl.restart()
})