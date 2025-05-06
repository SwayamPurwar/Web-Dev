var user = [
    {
        Name: "Swayam",
        Age: 20,
        City: "Indrapuri",
        Salary: 50000
    },
    {
        Name: "Gabbru",
        Age: 20,
        City: "Awadhpuri",
        Salary: 45000
    },
    {
        Name: "Devraj",
        Age: 20,
        City: "Prabhat Petrol Pump",
        Salary: 55000
    }
]

var body = document.querySelector("body")

var sum = ""

user.forEach(function (elem) {
    sum = sum + `  <div class="card">
        <h1>${elem.Name}</h1>
        <h2>${elem.Age} , ${elem.City}</h2>
        <h5>Salary: ${elem.Salary}</h5>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ut, perspiciatis!</p>
    </div>`

})

body.innerHTML = sum
