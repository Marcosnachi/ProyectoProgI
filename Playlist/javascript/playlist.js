window.onload = function (){

let canciones = JSON.parse(window.localStorage.getItem('cancion'));
let imprimirCanciones = document.querySelector('.canciones')


for (cancion of canciones) {
    imprimirCanciones.innerHTML += `  <div class="cancionindividual">

    <div class="imagenesdecancion">
    <img src="${cancion.album.cover}" alt="">
    </div>

      <div class="titulodecancion">
      ${cancion.title}
      </div>
      <div class="titulodealbum">
      ${cancion.album.title}
      </div>
      <div class="rereproduccionesdecancion"><button type="button" id= "#eliminar"class="btn btn-default dropdown-toggle" data-toggle="dropdown"><i class="fas fa-times"></i> <span class="caret"></span></button>
      </div>
         
  </div>
      `
    }


    let eliminarTodo = document.querySelector('.cosotransparente')
    eliminarTodo.onclick = function(){
        localStorage.clear('cancion');
    }
    /*let sacar = document.querySelector('.btn btn-default dropdown-toggle');
    sacar.onclick = function(){
        localStorage.removeItem('cancion');
    }
*/
}

