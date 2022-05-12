//La clase es una capsula todas las caracteristicas de un animal es relevantes para nuestro objeto
//Se encapsula en clases en una clase que abstrae dichas caracteristicas de un animal relevante
class Animal{
    constructor(nombre,tipo){
        this.nombre=nombre;
        this.tipo=tipo;
    }
    consultaDetalles(){
        return(`El nombre del animal es: ${this.nombre} y su tipo es: ${this.tipo}`)
    }
}

class Mamifero extends Animal {
    constructor(nombre, tipo, especial){
        super(nombre,tipo);
        this.especial=especial;
    }
    consultaDetalles(){
        return(`El nombre del animal es: ${this.nombre} y su tipo es: ${this.tipo} y es de tipo especial ${this.especial}`)
    }
}

class Oviparo extends Animal {
    
}

function imprimeAnimal(animal){
    try{
        console.log(typeof animal);
        console.log(animal.consultaDetalles());
    }catch(e){
        console.log("Se recibio un objeto que no es  animal");
        console.log(e.message);
    }
    
}


//Se instancia la clase Animal y se crea objeto de ese tipo
let animal1=new Animal("hipopotamo","mamifero");
//seguiran un patron general por la manera de como se defniio el constructor
let animal2=new Animal("pelicano","ave");
let mamifero1=new Mamifero("toro","mamifero","especial");
//console.log(animal1.consultaDetalles());
//console.log(animal2.consultaDetalles());
imprimeAnimal(animal1);
imprimeAnimal(animal2);
//imprimeAnimal(10000);
imprimeAnimal(mamifero1);