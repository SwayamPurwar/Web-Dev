var friends = [
    {
        name: "Sarthak",
        weight: 69
    },
    {
        name: "Harsh",
        weight: 50
    },
    {
        name: "Harshi",
        weight: 45
    },
    {
        name: "Ajay",
        weight: 67
    },
    {
        name: "Patel",
        weight: 98
    },
    {
        name: "Akarsh",
        weight: 99
    },
    {
        name: "Anuj",
        weight: 60
    },
]



var sum = 0

friends.forEach(function(elem){
    sum = sum + elem.weight
})

var h1 = document.querySelector("h1")

if(sum < 500){
    h1.innerHTML = "Eligible to go in Lift"

}else{
    h1.innerHTML ="Not Eligible to go in Lift"
}






