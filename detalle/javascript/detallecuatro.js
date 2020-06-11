window.onload = function (){
let queryString = window.location.search
let objetoQuery= new URLSearchParams(queryString);
let elId = objetoQuery.get('id');

    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + elId)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        let nombre= document.querySelector('div.infodelartista-4')
        let foto = document.querySelector('div.profile__img')
        let categoria = document.querySelector('div.infodelartista-3')
        nombre.innerHTML += '<h2>' + data.name + '</h2>'
        foto.innerHTML += '<img src="' + data.picture + '">'
        categoria.innerHTML += data.type


    })
    .catch(function(error){
        console.error(error);
    });
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre/' + elId + '/artists')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let canciones = document.querySelector('div.canciones')
        var datos = 0
        for (unaCancion of data.data) {
            datos = datos +1
            canciones.innerHTML += `<div class="cancionindividual">

            <div class="imagenesdecancion"><img src="${unaCancion.picture}" alt="${unaCancion.name}"> </div>

            <div class="titulodecancion">${unaCancion.name} </div>

            <a href="../detalle/detalle.html?id=${unaCancion.id}"><button class="cosotransparente">Ir al artista<i class="rereproducir"></i></button></a>

        </div>`
        if (datos > 9) {
            break;
         }
        } 


    })
    .catch(function(error){
        console.error(error);
    });



        
    }


