//  2. Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo. 
//     Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. 

var suma = 0;
do {
    var numero = prompt("Introduce un numero");
    if (Number(numero) == numero) {
        numero = Number(numero);
        suma = suma + numero;
    }
    //En caso de que no sea un numero 
    else {
        if (numero != undefined) {
            alert("( "+numero+" ) " + "No es un numero. Introduzca un numero");
        }
    }
//Regresamos al principio mientras no se aprete CANCELAR
} while (numero != undefined);
//Si se apreta CANCELAR mostramos la suma
document.write(suma);