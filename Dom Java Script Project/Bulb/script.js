var parent = document.querySelector(".parent")
var btn  = document.querySelector("button")
var flag = 0





btn.addEventListener("click",function(){
    if(flag == 0){
        parent.style.backgroundColor = "Yellow"
        btn.innerHTML = "TURN OFF"
        flag = 1
    }
    else{
        parent.style.backgroundColor = "Grey"
        btn.innerHTML = "TURN ON"
        flag = 0
    }
    
})