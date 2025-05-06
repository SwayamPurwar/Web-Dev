var body = document.querySelector("body")
var btn = document.querySelector("button")


var emojis = ["https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Cowboy_emoji_grande.png?v=1571606089","https://emojiisland.com/cdn/shop/products/Emoji_Icon_-_Sunglasses_cool_emoji_large.png?v=1571606093","https://pngfre.com/wp-content/uploads/emoji-15.png",
    "https://pngfre.com/wp-content/uploads/emoji-1-2048x2048.png","https://pngfre.com/wp-content/uploads/emoji-38.png"
]

btn.addEventListener("click",function(){
    var img = document.createElement("img")
    var random = Math.floor(Math.random()*emojis.length)
    img.setAttribute("src",emojis[random])
    body.appendChild(img)
    img.style.height = "90px"
    img.style.position = "absolute"
    img.style.top = Math.floor(Math.random()*100) + "%"
    img.style.left = Math.floor(Math.random()*100) + "%"
    img.style.rotate =  Math.floor(Math.random()*360) + "deg"
})