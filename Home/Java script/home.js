window.onload = function () {
    var slideIndex = 0;
    showSlides();

function showSlides() {
       var i;
       var slides = document.getElementsByClassName("mySlides");
       for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
       }
       slideIndex++;
       if(slideIndex > slides.length) {slideIndex = 1}
       slides[slideIndex-1].style.display = "block";
       setTimeout(showSlides,5000);
}
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        for (artistas of datos.data) {
        let div = document.getElementById('artistas')
        div.innerHTML += `
            <div class="photo-container">
               
            <a href="../detalle/detalle.html?=id${artistas.id}"><img src="${artistas.picture}" 
            alt="${artistas.name}"></a>

            <div class="text"><h3> ${artistas.name}</h3></div>
            </div>

            `


        }

    })


    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/albums')
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        for (albums of datos.data) {
        let div = document.getElementById('albums')
        div.innerHTML += `
            <div class="photo-container">
               
            <a href="../detalle/detalle.html?=id${albums.id}"><img src="${albums.cover}" 
            alt="${albums.title}"></a>

            <div class="text"><h3> ${albums.title}</h3></div>
            </div>

            `


        }

    })

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/tracks')
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos)
        for (tracks of datos.data) {
        let div = document.getElementById('tracks')
        div.innerHTML += `
            <div class="photo-container">
               
            <a href="../detalle/detalle.html?=id${tracks.id}"><img src="${tracks.album.cover}" 
            alt="${tracks.title}"></a>

            <div class="text"><h3> ${tracks.title}</h3></div>
            </div>

            `


        }

    })
}