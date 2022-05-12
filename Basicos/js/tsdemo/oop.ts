class Empleado {
    public name:string;
    private telefono:string;
    constructor(name:string, telefono:string){
        this.name=name;
        this.telefono=telefono;
    }

    getName(){
        return "El nombre del empleado es:"+this.name;
    }
    getTelefono(){
        return this.telefono;
    }
    setName(name:string){
        this.name=name;
    }
    setTelefono(telefono:string){
        this.telefono=telefono;
    }
}
class Manager extends Empleado{
    private noEmpleadosACargo:number;
    constructor(nombre:string, telefono:string, numeroEmpleados:number){
        super(nombre,telefono);
        this.noEmpleadosACargo=numeroEmpleados;
    }
    getNoEmpleadosACargo(){
        return this,this.noEmpleadosACargo;
    }
    setNoEmpleadosACargo(numero:number){
        return this
    }
}
let enmpleado1=new Empleado("Luna Gutierrez","7151181098");
console.log(enmpleado1.getName());
console.log(enmpleado1.getTelefono());
let manager1=new Manager("Madonna","7151181097",13);