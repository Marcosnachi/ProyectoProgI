window.onload = function (){
    let queryString = window.location.search
    let objetoQuery= new URLSearchParams(queryString);
    let elId = objetoQuery.get('id');
    
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + elId)
        .then(function(response){
            return response.json();
        })
        .then(function(data){
            console.log(data)
            let nombre= document.querySelector('div.infodelartista-4')
            let foto = document.querySelector('div.profile__img')
            let categoria = document.querySelector('div.infodelartista-3')
            let seguidores = document.querySelector("div.infoseguidores")
            let botones = document.querySelector('div.infodelartista-5')
            nombre.innerHTML += `<h2> ${data.title} </h2>`
            foto.innerHTML += '<img src="' + data.album.cover + '">'
            categoria.innerHTML += `${data.type} from: <a href="../detalle/detallealbum.html?id=${data.album.id}"> ${data.album.title}</a>`
            seguidores.innerHTML += `<a href="../detalle/detalle.html?id=${data.artist.id}"> ${data.artist.name} </a>`
            botones.innerHTML += `<a href="../detalle/detalle.html?id=${data.artist.id}"><button class="cosotransparente">Ir al artista<i class="rereproducir"></i></button></a>
            <a href="../detalle/detallealbum.html?id=${data.album.id}"><button class="cosotransparente">Ir al álbum<i class="rereproducir"></i></button></a>`
    

            let añadir = document.querySelector('#botonAddTo')
            añadir.onclick = function () {
               let cancionesEnLocal = window.localStorage.getItem('cancion')
                let cancionesArrayEnLocal = JSON.parse(cancionesEnLocal)

                if (!cancionesArrayEnLocal) {
                    cancionesArrayEnLocal = []
                }

                let cancionesPlaylist = [];
                cancionesArrayEnLocal.push(data)
            window.localStorage.setItem('cancion', JSON.stringify(cancionesArrayEnLocal))
            console.log(cancionesEnLocal)
            console.log(cancionesArrayEnLocal)
            }
        })
        .catch(function(error){
            console.error(error);
        });
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/track/' + elId)
        .then(function(response){
            return response.json();

        })
        .then(function(datos){
            let canciones = document.querySelector('div.canciones')
                canciones.innerHTML += `<div class="cancionindividual">
    
                <div class="imagenesdecancion"><img src="${datos.album.cover}" alt="${datos.title}"> </div>
    
                <div class="titulodecancion">${datos.title} </div>
                <div class="titulodealbum">${datos.artist.name} </div>
                <div class="rereproduccionesdecancion">${datos.duration} s</div>
    
            </div>`

            let audio = document.querySelector('#audio')
            audio.src = datos.preview

            
    
        })
        .catch(function(error){
            console.error(error);
        });
    
    
    
            
        }
    
    
    