window.onload = function (){
    
    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);

    //ahora si obtengo lo que mandé por el formulario de busqueda
    let buscate = objetoQuery.get ('filtro');
    
    
    console.log(buscate)
        
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + buscate)
        .then(function(response){
            return response.json();

        })
        .then(function(datos){
        console.log (datos)

            let resultados = document.querySelector('.resultados')
            for (let resultado of datos.data)
                resultados.innerHTML += `
                <div class="pc-resultados">
                   
                <a href="../detalle/detalle.html?id=${resultado.artist.id}"><img src="${resultado.album.cover}" 
                alt="${resultado.artist.name}"><h3> ${resultado.title}</h3></a>
    
                
                </div>
    
                `
    
        })
        .catch(function(error){
            console.error(error);
        });
    
    
    
            
        }
        

        

