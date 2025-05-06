var btn = document.querySelector("button")
var rect = document.querySelector(".rect")
var rect2 = document.querySelector(".rect2")
let val1,val2,val3;
let flap = false;
const colors = [];

btn.addEventListener("click",function(){
    val1 =  Math.floor(Math.random()*256)
    val2 =  Math.floor(Math.random()*256)
    val3 =  Math.floor(Math.random()*256)
    rect.style.background = `rgb(${val1},${val2},${val3})`;
    flap =true;
})

rect.addEventListener("click",function(){
    if (flap && colors.indexOf(`rgb(${val1},${val2},${val3})`) === -1){
        const div = document.createElement("div")
        div.classList.add("rect3")
        div.style.background = `rgb(${val1},${val2},${val3})`
        rect2.appendChild(div)
        colors.push(`rgb(${val1},${val2},${val3})`) 
        flap = false;
    }
})

rect2.addEventListener("click",function(details){
    rect2.removeChild(details.target)
    colors.splice(colors.indexOf(details.target.style.backgroundColor),1)
})
