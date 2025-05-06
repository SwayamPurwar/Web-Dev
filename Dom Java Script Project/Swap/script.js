var btn = document.querySelector("button")
var img1 = document.querySelector(".img1")
var img2 = document.querySelector(".img2")



btn.addEventListener("click",function(){
    var imgf = img1.getAttribute("src")
    var imgs = img2.getAttribute("src")

    img1.setAttribute("src",imgs)
    img2.setAttribute("src",imgf)


  
})