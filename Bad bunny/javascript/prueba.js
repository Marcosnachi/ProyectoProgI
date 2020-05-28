window.onload = function (){
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/10583405')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let nombre= document.querySelector('div.infodelartista-4')
        let foto = document.querySelector('div.profile__img')
        nombre.innerHTML += '<h2>' + data.name + '</h2>'
        foto.innerHTML += '<img src="' + data.picture + '">'



    })
    .catch(function(error){
        console.error(error);
    });
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/10583405/top')
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos)
        let canciones = document.querySelector('div.canciones')
        for (unaCancion of datos.data) {
            canciones.innerHTML += `<div class="cancionindividual">

            <div class="imagenesdecancion"><img src="${unaCancion.album.cover}" alt="${unaCancion.album.title}"> </div>

            <div class="titulodecancion">${unaCancion.title} </div>
            <div class="titulodealbum">${unaCancion.album.title} </div>
            <div class="rereproduccionesdecancion">${unaCancion.duration} s</div>

        </div>`
        }


    })
    .catch(function(error){
        console.error(error);
    });



        
    }


