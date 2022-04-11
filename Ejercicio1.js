// 1.Realiza un script que pida la edad y si es mayor de 18 años indica que ya puede conducir
var edad = prompt("Ingrese su edad");
if (Number(edad) == edad) {
	if (edad > 18) {
		document.write("Ya puedes conducir");
	}
    else{
        document.write("Aun no puedes conducir")
    }
}