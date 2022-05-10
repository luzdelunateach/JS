//'use strict' definimos que las variables tengan que definirse obligatoriamente ES UNA DIRECTIVA
var variable = 'Luz de luna';
console.log(variable);
console.log(typeof variable);
console.log(`El nombre del usuario es ${variable}`);
variable = 100.23;
console.log(variable);
console.log(typeof variable);
variable = true;
console.log(variable);
console.log(typeof variable);
variable = {
    "nombre":"Luna",
    "ciudad":"morelia",
    "profesion":"informatica"
}
console.log(variable.ciudad);
variable = function(a,b){
    if(a>b)
        return a;
    else{
        return b;
    }
}
//console.log(variable(8,2));
var resultado = variable(8,2);
console.log(typeof variable);

variable = new Date();
console.log(variable);
console.log(typeof variable);
let dato1 = 100;
let dato2 = 200;
let dato3 =50;

if(dato2>dato1 & dato2>dato3){
 console.log("Se cumple la condicion");
}
//prueba=24; con use strict puede evitar que no se definan variables como esta