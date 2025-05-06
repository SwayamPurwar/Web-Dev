var h1 = document.querySelector("h1")



document.addEventListener("keydown",function(gabbru){
    h1.innerHTML = gabbru.code

    
})



document.addEventListener("keydown",function(gabbru){
    if(gabbru.code == "ArrowUp"){
        console.log("Up");
    }
    else{
        console.log("Other");
        
    }
})