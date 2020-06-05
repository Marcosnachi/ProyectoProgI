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
               
            <a href="www.deezer.com/genre"><img src="${generos.picture}" 
            alt="${generos.name}"></a>

            <div class="text"><h3> ${generos.name}</h3></div>
            </div>

            `


        }

    })


    
}