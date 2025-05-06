localStorage.setItem("theme","Light")

var main = document.getElementById(".main")

var theme = localStorage.getItem("theme")

main.setAttribute("class",theme)

var mode = document.getElementById(".mode")

mode.addEventListener("click",function(){
    localStorage.setItem("theme","Dark")
    var main = document.getElementById(".main")
    
})