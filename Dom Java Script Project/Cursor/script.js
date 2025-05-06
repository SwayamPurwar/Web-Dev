var cursor = document.querySelector(".cursor")
var h1 = document.querySelector("h1") 
var body = document.querySelector("body")

body.addEventListener("mousemove",function(gabbru){
    console.log(gabbru)
    cursor.style.left = gabbru.x + "px"
    cursor.style.top = gabbru.y + "px"
})

h1.addEventListener("mousemove",function(gabbru){
    h1.style.scale = 2
    cursor.style.scale = 3
})

h1.addEventListener("mouseleave",function(gabbru){
    h1.style.scale = 1
    cursor.style.scale = 1
})