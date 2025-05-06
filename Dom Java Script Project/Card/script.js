var btn = document.querySelector("button")
var h2 = document.querySelector("h2")
var img = document.querySelector("img")

var flag = 0

btn.addEventListener("click",function(){
    h2.innerHTML = "Request Pending"
    h2.style.color = "royalblue"
    h2.style.fontWeight = 500
    img.style.border = "4px solid royalblue"
    btn.innerHTML = "Sending Request..."

    if(flag == 0){
        setTimeout(function(){
            btn.innerHTML = "Remove Friend"
            btn.style.backgroundColor = "Green"
            h2.innerHTML = "Friend"
            h2.style.color = "Green"
            img.style.borderColor = "Green"
            flag = 1

        },3000)




   
    }
    else{
        btn.innerHTML = "Friend"
        btn.style.backgroundColor = "lightseagreen"
        h2.innerHTML = "Stranger"
        h2.style.color = "Red"
        img.style.borderColor = "Red"
        flag = 0

    }





})