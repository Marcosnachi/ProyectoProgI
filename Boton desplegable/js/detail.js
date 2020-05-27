
    

let generos = document.querySelector ('.boton');

    //generos.onclick = function () {

    //alert ('le hice click');
//}

let detail = document.querySelector ('ul.detalle');


generos.onclick = function(){
        //detail.style.backgroundColor = 'transparent';
        //detail.style.color = 'black';
        //detail.style.marginTop = '5%'
    if (detail.style.display == 'grid') {
        detail.style.display = 'none' ;
    

     } else {
    
        detail.style.display = 'grid' ;
    }

    
}

