// 8.Realiza un script que muestre la serie de fibonacci hasta un número entre 1 y 100 pedido por teclado
var numero = Number(prompt("Intruzca un número entre 1 y 100"));
if((numero >= 1) && (numero <= 100)) {
    var x = 0;
    var y = 1;
    var z;
    //Para comenzar Incluimos el numero 0
    document.write(x + " ");
    //BUCLE PARA IMPRIMIR EL RESTO DE NÚMEROS (numero-1 porque ya imprimimos uno)
    for (i = 0; i < (numero-1); i++) {
        z = x + y;
        document.write(z + "  ");
        y = x;
        x = z;
    }
}
else {
    alert("Incorrecto. Introduzca un numero");
}