var arregloRegistros = [];
var mensaje = "Hola mundo";
var dato = 5;
var encendido = false;
var otracadena = "";
var ejemplo1, ejemplo2, ejemplo3;
ejemplo1 = [10, 'cadena1', true];
ejemplo2 = [11, 'cadena2', false];
ejemplo3 = [12, 'cadena3', true];
arregloRegistros.push(ejemplo1);
arregloRegistros.push(ejemplo2);
arregloRegistros.push(ejemplo3);
function imprimirRegistros(arreglo) {
    for (var _i = 0, arreglo_1 = arreglo; _i < arreglo_1.length; _i++) {
        var registro = arreglo_1[_i];
        console.log(registro);
    }
}
//imprimirRegistros(arregloRegistros);
console.log(mensaje);
/*let encabezado= document.createElement("h1");
encabezado.textContent=mensaje;
document.body.appendChild(encabezado);*/ 
