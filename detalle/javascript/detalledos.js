window.onload = function (){
    let queryString = window.location.search
    let objetoQuery= new URLSearchParams(queryString);
    let elId = objetoQuery.get('id');
    
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + elId)
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
            foto.innerHTML += '<img src="' + data.cover + '">'
            categoria.innerHTML += `${data.type} | fecha de lanzamiento: ${data.release_date}`
            seguidores.innerHTML += data.fans + ' followers'
            botones.innerHTML += `<a href="../detalle/detalle.html?id=${data.artist.id}"><button class="cosotransparente">Ir al artista<i class="rereproducir"></i></button></a>`
            
    
    
        })
        .catch(function(error){
            console.error(error);
        });
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/album/' + elId)
        .then(function(response){
            return response.json();
        })
        .then(function(datos){
            let canciones = document.querySelector('div.canciones')
            for (unaCancion of datos.tracks.data) {
                canciones.innerHTML += `<a href="../detalle/detalletracks.html?id=${unaCancion.id}"><div class="cancionindividual">
    
                <div class="imagenesdecancion"><img src="${datos.cover}" alt="${unaCancion.title}"> </div>
    
                <div class="titulodecancion">${unaCancion.title} </div>
                <div class="titulodealbum">${unaCancion.artist.name} </div>
                <div class="rereproduccionesdecancion">${unaCancion.duration} s</div>
    
            </div></a>`
            }
    
    
        })
        .catch(function(error){
            console.error(error);
        });
    
    
    
            
        }
    
    
    