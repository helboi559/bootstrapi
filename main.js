//button event
//get random image
let img = document.querySelector('.card-img-top')
let button = document.querySelector('.btn')
//add button listener
button.addEventListener('click',()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((data)=>data.json())
    .then((res)=> {
        //set the image with the data MESSAGE
        console.log(res)
        img.src = res.message
    })
    //logs exceptions if 
    .catch((error)=> console.log(error)) 
})

//weather
let getWeather = document.querySelector("#getWeather")
let cityText = document.querySelector('#cityName')
// console.log(getWeather)
let temp = document.querySelector('#temperature')
let wind = document.querySelector('#wind')
let description = document.querySelector('#description')
console.log(temp)
getWeather.addEventListener('click',()=>{
    
    let nameVal = `https://goweather.herokuapp.com/weather/${cityText.value}`
    // console.log(cityText.value)
    fetch(`${nameVal}`)
        .then((data) => {
            // console.log(data)
            return data.json()
        })
        .then((res)=>{
            console.log(res)
            temp.textContent= res.temperature
            wind.textContent= res.wind
            description.textContent= res.description
        })
})