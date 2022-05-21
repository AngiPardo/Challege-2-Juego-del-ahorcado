var texto1 = document.getElementById("entradaDeTexto");			
var boton1 = document.getElementById("botonNuevoJuego");
var boton2 = document.getElementById("botonDesistir");
var texto2 = document.getElementById("canvasDelDibujo");
var pantalla = document.querySelector("canvas");
var pincel = pantalla.getContext("2d");

boton1.addEventListener("click", nuevoJuego);
boton2.addEventListener("click", desistir);
window.addEventListener("keydown",dibujarLetrasDigitadasEnElTeclado);

var lienzoCanvas = document.querySelector("canvas");
lienzoCanvas.focus();

function saltarLinea(){

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase){

    document.write(frase);
    saltarLinea();
}

function nuevoJuego(){
    window.open("inicio.html");
    intentos = 0;
}

function desistir() {
    window.open("index.html");
    intentos = 0;    
}

pincel.lineWidth = 5;
pincel.moveTo(150, 190);
pincel.lineTo(350, 190);
pincel.strokeStyle = "#000000";
pincel.stroke();

var contadorPartesDelMuneco = 0;

function dibujarPartesDelMuneco(){
    
    contadorPartesDelMuneco = contadorPartesDelMuneco + 1;
    pincel.fillStyle='black';
    pincel.beginPath();
    
    if(contadorPartesDelMuneco == 1) {
        pincel.moveTo(200, 190);
        pincel.lineTo(200, 20);
        pincel.fill();
    }else if(contadorPartesDelMuneco == 2){
        pincel.moveTo(200, 20);
        pincel.lineTo(250, 20);
    }else if(contadorPartesDelMuneco == 3){
        pincel.moveTo(250, 20);
        pincel.lineTo(250, 40);        
    }else if(contadorPartesDelMuneco == 4){
        pincel.arc(250, 55, 15, 0, 360);      
    }else if(contadorPartesDelMuneco == 5){
        pincel.moveTo(250, 70);
        pincel.lineTo(250, 150);        
    }else if(contadorPartesDelMuneco == 6){
        pincel.moveTo(250, 70);
        pincel.lineTo(280, 100);        
    }else if(contadorPartesDelMuneco == 7){
        pincel.moveTo(250, 70);
        pincel.lineTo(230, 100);        
    }else if(contadorPartesDelMuneco == 8){
        pincel.moveTo(250, 150);
        pincel.lineTo(280, 180);        
    }else if(contadorPartesDelMuneco == 9){
        pincel.moveTo(250, 150);
        pincel.lineTo(230, 180);        
        alert("¡Agotaste el número de intentos máximos!");    
    }
    pincel.strokeStyle = "#000000";
    pincel.stroke();

    mostrarLetreroFinDelJuego();
}

var listaDePalabras = ["CSS","JSON","HTML","JAVA"];
// var palabraImportadaDesdeAgregarPuntoJavascr = window.palabraAAgregar;
// if(palabraImportadaDesdeAgregarPuntoJavascr.length >= 1) {
//     listaDePalabras.push(palabraImportadaDesdeAgregarPuntoJavascr);
// }
var largoListadePalabras = listaDePalabras.length;
var palabraAleatoria = listaDePalabras[Math.floor(Math.random()*largoListadePalabras)];

    pincel.textBaseline = "bottom";
    pincel.textAlign = "center";
    pincel.font = "30px Arial";
    pincel.font = "30px Arial";
    x = 110;

    for (var i = 0; i < palabraAleatoria.length; i++) {
       
        pincel.fillText("__ ",x,240);
        x = x + 45;
    }

    var letrasIntentadas = [];
    var y = 300;
    var contadorCasillasAcertadas = 0;

    function dibujarLetrasDigitadasEnElTeclado() {
        var codigoLetraIntroducidaEnElTeclado = event.which || event.keyCode;
        var letraIntroducidaEnElTeclado = String.fromCharCode(codigoLetraIntroducidaEnElTeclado);

        if(codigoLetraIntroducidaEnElTeclado >= 65 && codigoLetraIntroducidaEnElTeclado <= 90) {
            if(palabraAleatoria.includes(letraIntroducidaEnElTeclado)) {
                for (var j = 0; j < palabraAleatoria.length; j++) {
                    if(palabraAleatoria[j].includes(letraIntroducidaEnElTeclado)) {
                        pincel.fillText(palabraAleatoria[j],105 + 45*j,235);
                        contadorCasillasAcertadas = contadorCasillasAcertadas + 1;
                    }  
                }

                if (contadorCasillasAcertadas == palabraAleatoria.length) {
                    pincel.fillStyle = "#0000FF";
                    pincel.fillText("¡Felicidades,ganaste!",430,130);
                }


            }else{
                if(letrasIntentadas.includes(letraIntroducidaEnElTeclado) == false) {
                    letrasIntentadas.push(letraIntroducidaEnElTeclado);
                    pincel.fillText(letraIntroducidaEnElTeclado + ",",y,75);
                    y = y + 28;
                    dibujarPartesDelMuneco();
                }
                 
            }

        }else{
            alert("¡Sólamente las letras mayúsculas de la A a la Z están permitidas, excepto la Ñ!");
        }    
    }

    function mostrarLetreroFinDelJuego() {
        if (contadorPartesDelMuneco == 9) {
            pincel.fillStyle = "#FF0000";
            pincel.fillText("¡Fin del juego!",450,170);
        }
    }