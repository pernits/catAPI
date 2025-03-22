let catPic = document.getElementById('catPic');
let button = document.getElementById('button');

button.addEventListener('click', getCat);

function getCat(){
    fetch("https://api.thecatapi.com/v1/images/search")
    .then(response => response.json())
    .then(data => {
        document.getElementById("catPic").src = data[0].url;
    })
}
