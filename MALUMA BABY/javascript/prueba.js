window.onload = function (){
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/1424602')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let nombre= document.querySelector('div.infodelartista-4')
        let foto = document.querySelector('div.profile__img')

        let seguidores = document.querySelector('div.oyentesdelartista_numeros')
        nombre.innerHTML += '<h2>' + data.name + '</h2>'
        foto.innerHTML += '<img src="' + data.picture + '">'
        seguidores.innerHTML  += data.nb_fan


    })
    .catch(function(error){
        console.error(error);
    });
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/artist/1424602/top')
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data)
        let imgtracks = document.querySelectorAll ('div.imagenesdecancion')
        let nombretracks = document.querySelectorAll ('div.titulodecancion')
        nombretracks.innerHTML += '<p>' + data.title + '</p>'
        imgtracks.innerHTML += '<img src=' + data.album.cover + '"/>'

    })
    .catch(function(error){
        console.error(error);
    });



        
    }


