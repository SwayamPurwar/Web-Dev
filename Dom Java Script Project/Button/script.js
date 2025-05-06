var btn =  document.querySelectorAll("button")
var body = document.querySelector("body")


btn.forEach(function(gabbru){
    gabbru.addEventListener("click",function(){
        body.style.backgroundColor = gabbru.innerHTML
    })
   

})