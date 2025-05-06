var img = document.querySelector("img")


moveX = 0
moveY = 0

document.addEventListener("keydown",function(gabbru){
    
    
    if(gabbru.code == "ArrowRight" && moveX<85){
        moveX++
        img.style.left = moveX + "%" 
    }
    else if(gabbru.code == "ArrowLeft" && moveX>0){
        moveX--
        img.style.left = moveX + "%"  
    }
    else if(gabbru.code == "ArrowDown"  && moveY<75){
        moveY++
        img.style.top = moveY + "%"   
    }
    else if(gabbru.code == "ArrowUp"  && moveY>0){
        moveY--
        img.style.top = moveY + "%"
    }
})

document.addEventListener("keydown",function(gabbru){
    
    
    if(gabbru.code == "KeyD" && moveX<85){
        moveX++
        img.style.left = moveX + "%" 
    }
    else if(gabbru.code == "KeyA" && moveX>0){
        moveX--
        img.style.left = moveX + "%"  
    }
    else if(gabbru.code == "KeyS"  && moveY<75){
        moveY++
        img.style.top = moveY + "%"   
    }
    else if(gabbru.code == "KeyW"  && moveY>0){
        moveY--
        img.style.top = moveY + "%"
    }
})