window.onload = function () {
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/artists')
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        for (artistas of datos.data) {
        let div = document.getElementById('artistas')
        div.innerHTML += `
            <div class="photo-container">
               
            <a href="${artistas.link}"><img src="${artistas.picture}" 
            alt="${artistas.name}"></a>

            <div class="text"><h3> ${artistas.name}</h3></div>
            </div>

            `


        }

    })
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/chart/0/playlists')
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        for (playlists of datos.data) {
        let div = document.getElementById('playlists')
        div.innerHTML += `
            <div class="photo-container">
               
            <a href="${playlists.link}"><img src="${playlists.picture}" 
            alt="${playlists.title}"></a>

            <div class="text"><h3> ${playlists.title}</h3></div>
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
               
            <a href="${albums.link}"><img src="${albums.cover}" 
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
               
            <a href="${tracks.link}"><img src="${tracks.album.cover}" 
            alt="${tracks.title}"></a>

            <div class="text"><h3> ${tracks.title}</h3></div>
            </div>

            `


        }

    })
}