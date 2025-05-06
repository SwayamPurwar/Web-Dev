const people = [
    {
        profilePicture: "https://images.unsplash.com/photo-1662749581383-be7770660490?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGltYWdlcyUyMHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D",
        status: "https://images.unsplash.com/photo-1672823237587-17475ba5b8fd?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fHBob3RvJTIwbWVufGVufDB8fDB8fHww",
        name: "Add Status",
        timeUploaded: "5 min ago"
    },
    {
        profilePicture: "https://images.unsplash.com/photo-1570701564993-e00652af8aa7?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aW1hZ2VzJTIwbWVuc3xlbnwwfHwwfHx8MA%3D%3D",
        status: "https://images.unsplash.com/flagged/photo-1556120011-52de4d5c2743?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Bob",
        timeUploaded: "2 hour ago"
    },
    {
        profilePicture: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHBob3RvJTIwbWVufGVufDB8fDB8fHww",
        status: "https://images.unsplash.com/photo-1614743966871-3b56de7fed44?q=80&w=3027&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        name: "Hank",
        name: "Charlie",
        timeUploaded: "3 hour ago"
    },
    {
        profilePicture: "https://plus.unsplash.com/premium_photo-1668127295858-552a0ef56309?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGltYWdlcyUyMGdpcmxzfGVufDB8fDB8fHww",
        status: "https://images.unsplash.com/photo-1612447000851-f349d4a37664?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGhvdG8lMjBtZW58ZW58MHx8MHx8fDA%3D",
        name: "Diana",
        timeUploaded: "4 hour ago"
    },
    {
        profilePicture: "https://images.unsplash.com/flagged/photo-1556120010-d3bb313336ed?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGltYWdlcyUyMGdpcmxzfGVufDB8fDB8fHww",
        status: "https://images.unsplash.com/photo-1719087392185-52f83ababd4a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGhvdG8lMjBtZW58ZW58MHx8MHx8fDA%3D",
        name: "Eve",
        timeUploaded: "6 hour ago"
    }
];

var sum = ""

people.forEach(function (elem, idx) {

    sum = sum + `   <div class="status" id="${idx}">
                <div class="overlay"></div>
                <div class="image">
                    <img src="${elem.profilePicture}" alt="" srcset="">
                </div>
              
                <div class="statusdetails">
                    <h2>${elem.name}</h2>
                    <h5>${elem.timeUploaded}</h5>
                </div>

            </div> `
})


var allstatus = document.querySelector(".allstatus")

allstatus.innerHTML = sum

var full = document.querySelector(".full")

var user = document.querySelector(".full h2")

var progress = document.querySelector(".progress")

allstatus.addEventListener("click", function (dets) {

    var grow = 0

    var imp = people[dets.target.id]

    var int = setInterval(function () {
        grow++
        progress.style.width = grow + "%" 
    }, 30)

    full.style.display = "block"
    full.style.backgroundImage = `url(${imp.status})`
    user.innerHTML = imp.name
    
    setTimeout(function () {
        full.style.display = "none"
        clearInterval(int)
    }, 3000)

})