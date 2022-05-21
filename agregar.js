var boton1 = document.getElementById("botonGuardarYEmpezar");
var boton2 = document.getElementById("botonCancelar");
var cajaDeTexto = document.getElementById("cajaDeTexto");

boton1.addEventListener("click", guardarYEmpezar);
boton2.addEventListener("click", cancelar);

cajaDeTexto.focus;

function saltarLinea(){

    document.write("<br>");
    document.write("<br>");
    document.write("<br>");
}

function imprimir(frase){

    document.write(frase);
    saltarLinea();
}

//Nota sobre pasar info entre archivos: //from the iframe
// var theVariable = window.parent.yourVariableName;

// //from the parent
// var theVariable = document.getElementById("iframeId").contentWindow.yourVariableName;

function guardarYEmpezar(){

    if(cajaDeTexto.value == "" || cajaDeTexto.value == "Ingresa una palabra (mayúsculas, máx 8 letras)") {
        alert("¡Por favor ingresa una palabra para agregar!");
    }else{
        for (var k = 0; k < cajaDeTexto.value.length; k++) {
            if((cajaDeTexto.value.charCodeAt(k) >= 65 && cajaDeTexto.value.charCodeAt(k)) == false) {
                alert("¡Sólamente las letras mayúsculas de la A a la Z están permitidas, excepto la Ñ!");
                break;
            }else{
                var palabraAAgregar = cajaDeTexto.value;
                var palabraAAgregarEnMayusculas = palabraAAgregar.toUpperCase();
                alert("Se guardará la palabra como " + palabraAAgregarEnMayusculas);
                // <a href="inicio.html"></a>
                window.open("inicio.html");
                break;
            }
        }
        
    }
           
}

function cancelar() {
        
    window.open("inicio.html");    
}



