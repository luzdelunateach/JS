let numeros = [8,9,12,45];
let condiciones = [true, false, true, false];
numeros.push(84); //agregar el valor al array
console.log(numeros);
console.log(numeros[0]); //arrays son zero based
console.log(numeros[4]);//arrays son zero based
console.log(numeros.length);

for(index=0;index<numeros.length;index++){
    console.log(numeros[index]);
}

condiciones.forEach(function (element){console.log("for each: "+element)});

let personas = []

personas.push({
    "nombre": "Juan",
    "apellido": "Perez"
});

personas.push({
    "nombre": "Jhon",
    "apellido": "Doe"
});

personas.push({
    "nombre": "Miguel",
    "apellido": "Suarez"
});

personas.push({
    "base":45.12,
    "altura": 10.3
});

personas.push(5);

personas.forEach(function(persona){
    console.log(persona);
});


//numeros.forEach(element => {console.log("for each lambda: "+element)});