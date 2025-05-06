var arr = [


    {
        model : "Samsung",
        price:50000,
        color:"black",
        quantity:20
    },
    {
        model : "iPhone 13",
        price:70000,
        color:"White",
        quantity:64,
    },

    {
        model : "Oneplus",
        price:10000,
        color:"Blue",
        quantity:10
    }
]

var sum = 0

arr.forEach(function(elem){
    sum = sum + (elem.price*elem.quantity)
})



var h1 = document.querySelector("h1")

h1.innerHTML = `This Price of Phone is  ${sum}`