interface IMedioDeTransporte{
    motor:string;
    color:string;

    frenar:()=>void; //metodo anonimo que no devuleve nada
}
class Automovil implements IMedioDeTransporte{
    motor:string;
    color:string;
    constructor(motor:string,color:string){
        this.motor=motor;
        this.color=color;
    }
    frenar():void{
        console.log("Frenar");
    }
}
class Autobus implements IMedioDeTransporte{
    motor:string;
    color:string;
    constructor(motor:string, color:string){
        this.motor=motor;
        this.color=color;
    }
    frenar():void{
        console.log("Frenar");
    }
}