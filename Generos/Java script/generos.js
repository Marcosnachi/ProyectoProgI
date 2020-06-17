window.onload = function () {
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/genre')
    .then(function(response){
        return response.json();
    })
    .then(function(datos){
        console.log(datos)
        for (generos of datos.data) {
        let div = document.getElementById('generos')
        div.innerHTML += `
            <div class="photo-container">
               
            <a href="../detalle/detallegeneros.html?id=${generos.id}"><img class= "imagenh" src="${generos.picture}" 
            alt="${generos.name}"><h3> ${generos.name}</h3></a>

            
            </div>
            `


        }

    })


    
}