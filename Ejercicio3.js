// 3.Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. 
var Nombre1 = prompt("Introduzca el Primer NOMBRE: ");
var Edad1 = Number(prompt("Introduzca la EDAD del Primer Nombre:"));

var Nombre2 = prompt("Introduzca el Segundo NOMBRE: ");
var Edad2 = Number(prompt("Introduzca la EDAD del Segundo Nombre:"));

var Nombre3 = prompt("Introduzca el Tercer NOMBRE:");
var Edad3 = Number(prompt("Introduzca la EDAD del Tercer Nombre:"));

//Función max() devuelve el mayor 
var maximo = Math.max(Edad1, Edad2, Edad3);

if (maximo == Edad1) {
    document.write("El mayor es: " + Nombre1);
}
if (maximo == Edad2) {
    document.write("El mayor es: " + Nombre2);
}
if (maximo == Edad3) {
    document.write("El mayor es: " + Nombre3);
}