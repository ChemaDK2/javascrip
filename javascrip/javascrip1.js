window.onload=inicio;

function inicio (){
    document.querySelectorALL(".boton")[0].onclick=accion1;
    document.querySelectorALL(".boton")[1].onclick=accion2;
    document.querySelectorALL(".boton")[2].onclick=accion3;

}
function accion1(){
    document.querySelector(".caja").innerHTML="hola mundo"
}

function accion2(){
    document.querySelector(".caja").innerHTML="imag/javascript-1.svg";
}

function accion2(){
    document.querySelector(".caja").innerHTML="<button>Botón</button>";
}
