console.log('%c HI', 'color: firebrick')

document,addEventListener('DOMContentLoaded', function(){ 
    fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(resp => resp.json())
    .then(json => json.message.forEach(img => {
        console.log(img)
        insertImg(img)
    }))
    function insertImg(img){
    const dogImgDiv = document.getElementById('dog-image-container')
        dogImgDiv.innerHTML += `<img src=${img}>`
    }

    fetch('https://dog.ceo/api/breeds/list/all')
    .then(resp => resp.json())
    .then(dogBreeds => Object.keys(dogBreeds.message).forEach(dogBreeds => {
        console.log(dogBreeds)
        insertBreed(dogBreeds)
    }))
    function insertBreed(dogBreeds) {
    const dogBreedDiv = document.getElementById('dog-breeds')
        dogBreedDiv.innerHTML += `<li><a href="">${dogBreeds}</a></li>`
        }
    // dogBreedDiv.addEventListener("click",e => {
    //     const color = Math.floor(Math.random()*16777215).toString(16);
    //     e.preventDefault()
    //     e.target.style.color = `#${color}`
    // });
    

    
    
    
   


  






  
})

