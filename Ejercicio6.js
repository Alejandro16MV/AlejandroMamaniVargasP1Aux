//   6. Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. 
//      Ejemplo: Si escribimoe el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si existe 
//      el signo “(“pero no el signo “)” mostrará desde el primer paréntesis hasta el final
var cadena = prompt("Introduzca una cadena de texto que contenga parentesis");
//Longitud de la cadena
var numchar = cadena.length;
var j;
var car;
var salida = "";
var copiar = false;
    
for (j = 0; j < numchar; j++) {
    car = cadena.charAt(j);    //recupera el caracter i del string.
    if (car == ")") {
        copiar = false;
    }
    if (copiar) {
        salida = salida + car;
    }
    if (car == "(") {
            copiar = true;
    }
}
document.write(salida);