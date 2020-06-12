window.onload = function (){
    
    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);

    //ahora si obtengo lo que mandé por el formulario de busqueda
    let buscate = objetoQuery.get ('filtro');
    
    //fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + busqueda)
        //.then(function(res){
            //transformo en json
            //return res.json();
            
        //})
    console.log(buscate)
        
        fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + buscate)
        .then(function(response){
            return response.json();

        })
        .then(function(datos){
        console.log (datos)

<<<<<<< HEAD
            let resultados = document.querySelector('.photo-container')
            for (let resultado of datos.data)
                resultados.innerHTML += `
                <div class="photo-container">
                   
                <a href="../detalle/detalle.html?id=${resultado.artist.id}"><img src="${resultado.artist.picture}" 
                alt="${resultado.artist.name}"></a>
    
                <div class="text"><h3> ${resultado.title}</h3></div>
                </div>
    
                `

            
          
    
        })
        .catch(function(error){
            console.error(error);
        });
    
    
    
            
        }
=======
        
            .then(function(datos){
                console.log(datos)
                for (albums of datos.data) {
                let div = document.getElementById('albums')
                div.innerHTML += `
                    <div class="photo-container">
                       
                    <a href="../detalle/detalletracks.html?id=${albums.id}"><img src="${albums.cover}" 
                    alt="${albums.title}"></a>
                    <div class="text"><h3> ${albums.title}</h3></div>
                    </div>
                    `
        
        
                }
        
            })}
>>>>>>> 6b153664ba4811d989ccc998688b0245c6bb56a3
