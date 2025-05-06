const people = [
    {
        profilePicture: "https://images.unsplash.com/photo-1614743966871-3b56de7fed44?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        storypicture: "https://images.unsplash.com/photo-1570701564993-e00652af8aa7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2VzJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
        username: "Your Story"
    },

    {
        profilePicture: "https://images.unsplash.com/photo-1662749581383-be7770660490?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGltYWdlcyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        storypicture: "https://images.unsplash.com/photo-1672823237587-17475ba5b8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvJTIwbWVufGVufDB8fDB8fHww",
        username: "itz_gabbru"
    },
    {
        profilePicture: "https://plus.unsplash.com/premium_photo-1668127295858-552a0ef56309?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlcyUyMGdpcmxzfGVufDB8fDB8fHww",
        storypicture: "https://images.unsplash.com/flagged/photo-1556120011-52de4d5c2743?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        username: "dimple_queen"
    },
    {
        profilePicture: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob3RvJTIwbWVufGVufDB8fDB8fHww",
        storypicture: "https://images.unsplash.com/flagged/photo-1556120010-d3bb313336ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGltYWdlcyUyMGdpcmxzfGVufDB8fDB8fHww",
        username: "dinchak_pooja"
    },
    {
        profilePicture: "https://images.unsplash.com/photo-1719087392185-52f83ababd4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG8lMjBtZW58ZW58MHx8MHx8fDA%3D",
        storypicture: "https://images.unsplash.com/photo-1612447000851-f349d4a37664?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG8lMjBtZW58ZW58MHx8MHx8fDA%3D",
        username: "poonam_pandey"
    }
];

const post = [
    {
        postimage: "https://bsmedia.business-standard.com/_media/bs/img/article/2024-10/04/full/1728030304-9754.jpg",
        posttime: "21 hour ago",
        postlike: "1,114 likes",
        postcomment: " View all 7 comments",
        postusername: "moneycontrol_hindi",
        postlogo: "https://is1-ssl.mzstatic.com/image/thumb/Purple221/v4/ab/ad/04/abad0452-a606-7ac2-230e-451382dd1f50/AppIcon-0-0-1x_U007emarketing-0-8-0-85-220.png/1200x630wa.png",
        postp:"Stock Market Crash Today: Indian stock markets tumbled on Friday, dragged down by financial and IT stocks, amid cautious sentiment following the U.S. Federal Reserve's rate cut projections. The Sensex and Nifty fell 1.49% and 1.52%, respectively..."
    },
    {
        postimage: "https://images.unsplash.com/photo-1561078284-43914ab87eb5?q=80&w=3000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        posttime: "3 hour ago",
        postlike: "148 likes",
        postcomment: " View all 5 comments",
        postusername: "itz_Gabbru_Jawan",
        postlogo: "https://images.unsplash.com/photo-1559912289-f8185f0bdecd?q=80&w=2970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        postp:"Standing on the edge of the worls, embracing the endless horizon..."
    },    
    {
        postimage: "https://plus.unsplash.com/premium_photo-1669824376679-268d3739acf3?q=80&w=3095&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        posttime: "45 min ago",
        postlike: "12,340 likes",
        postcomment: " View all 1,203 comments",
        postusername: "Dinchak_Pooja",
        postlogo: "https://plus.unsplash.com/premium_photo-1668127295858-552a0ef56309?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlcyUyMGdpcmxzfGVufDB8fDB8fHww",
        postp:"rate my pout.........out of 10 and yes....i know i am cute..."
    }
]

var sum = ""

people.forEach(function (elem, idx) {

    sum = sum + ` <div class="stories">
                <img id="${idx}" src="${elem.profilePicture}" alt="" srcset="">
                <div class="name">
                    <h5>${elem.username}</h5>
                </div>
                
            </div>`
})

var story = document.querySelector(".story")

story.innerHTML = sum

var full = document.querySelector(".full")

var user = document.querySelector(".full h2")

var progress = document.querySelector(".progress")

story.addEventListener("click", function (dets) {

    var grow = 0

    var imp = people[dets.target.id]

    var int = setInterval(function () {
        grow++
        progress.style.width = grow + "%"
    }, 30)

    full.style.display = "block"
    full.style.backgroundImage = `url(${imp.storypicture})`
    user.innerHTML = imp.username

    setTimeout(function () {
        full.style.display = "none"
        clearInterval(int)
    }, 3000)

})

var sum = ""

post.forEach(function(elem){

    sum = sum + ` <div class="post">
                <div class="logo">
                    <div class="dot">
                        <div class="logoimg">
                            <img src="${elem.postlogo}" alt="">
                        </div>
                        <h5>${elem.postusername}</h5>
                    </div>
                    <div class="dotss">
                        <div class="dots"></div>
                        <div class="dots"></div>
                        <div class="dots"></div>
                    </div>
                </div>
                <img src="${elem.postimage}" alt="">
                <div class="imagestatus">
                    <div class="likeshare">
                        <i class="ri-heart-line"></i>
                        <i class="ri-chat-1-line"></i>
                        <i class="ri-telegram-2-line"></i>
                    </div>
                    <div class="save">
                        <i class="ri-arrow-down-box-fill"></i>
                    </div>
                </div>
                <div class="count">
                    <h5 class="font">${elem.postlike}</h5>
                    <p><span class="spanp">${elem.postusername}</span> ${elem.postp}<span class="span">more</span></p>
                    <h5>${elem.postcomment}</h5>
                    <h6>${elem.posttime}  . <span>See translation</span> </h6>
                </div>
            </div>`
})

var posts = document.querySelector(".posts")

posts.innerHTML = sum