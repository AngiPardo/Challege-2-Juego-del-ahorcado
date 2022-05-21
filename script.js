		
var boton1 = document.getElementById("botonIniciarJuego");
var boton2 = document.getElementById("botonAgregarPalabra");

boton1.addEventListener("click", irAlJuego);
boton2.addEventListener("click", agregarPalabraAlJuego);



function saltarLinea(){

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase){

    document.write(frase);
    saltarLinea();
}

function irAlJuego(){
        
    window.open("inicio.html");    
}

function agregarPalabraAlJuego() {
        
    window.open("agregar.html");    
}

