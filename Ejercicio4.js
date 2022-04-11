// 4.Genera 3 números aleatorios entre 1 y 99 pero que no se repita ninguno
var i = 0;
var numero;
var uno = 0;
var dos = 0;
var tres = 0;
do {
    //generamos numeros aleatorios con Math.random
    numero = Math.floor((Math.random() * 99) + 1);
    if ((numero != uno) && (numero != dos) && (numero != 3)) {
        document.write(numero + "<br>");
        i++;
        if (i == 1) {
            uno = numero;
        }
        if (i == 2) {
            dos = numero;
        }
        if (i == 3) {
            tres = numero;
        }
    }
} while (i < 3);