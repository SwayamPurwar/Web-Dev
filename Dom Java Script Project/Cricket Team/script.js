var team = ["CSK","RCB","KKR","MI","GT","SRH","RR","LSG"]
var btn = document.querySelector("button")
var h1 = document.querySelector("h1")


btn.addEventListener("click",function(){
    var num = Math.floor(Math.random()*team.length)

    h1.innerHTML = team[num]
})