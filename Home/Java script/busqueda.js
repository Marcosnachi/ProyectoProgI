window.onload = function (){
    

    //obtengo el query string
    let queryString = window.location.search

    //paso de ese texto a un objeto
    let objetoQuery = new URLSearchParams(queryString);

    //ahora si obtengo lo que mandé por el formulario de busqueda
    let busqueda = objetoQuery.get('filtro');
    
    fetch('https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=' + busqueda)
        .then(function(res){
            //transformo en json
            return res.json();
            
        })

        
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