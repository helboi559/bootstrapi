//button event
//get random image
let img = document.querySelector('.card-img-top')
let button = document.querySelector('.btn')
// console.log(img)
//return http response
button.addEventListener('click',()=> {
    fetch("https://dog.ceo/api/breeds/image/random")
    .then(function(response){
        // console.log(response)
        return response.json()
    })
    .then(function(data){
        //set the image with the data MESSAGE
        img.src = data.message
    }) 
})


//button changes pictures of dogs

// console.log(button)
