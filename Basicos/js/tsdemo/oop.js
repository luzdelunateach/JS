class Empleado {
    constructor(name, telefono) {
        this.name = name;
        this.telefono = telefono;
    }
    getName() {
        return "El nombre del empleado es:" + this.name;
    }
    getTelefono() {
        return this.telefono;
    }
    setName(name) {
        this.name = name;
    }
    setTelefono(telefono) {
        this.telefono = telefono;
    }
}
class Manager extends Empleado {
    constructor(nombre, telefono, numeroEmpleados) {
        super(nombre, telefono);
        this.noEmpleadosACargo = numeroEmpleados;
    }
    getNoEmpleadosACargo() {
        return this, this.noEmpleadosACargo;
    }
    setNoEmpleadosACargo(numero) {
        return this;
    }
}
let enmpleado1 = new Empleado("Luna Gutierrez", "7151181098");
console.log(enmpleado1.getName());
console.log(enmpleado1.getTelefono());
let manager1 = new Manager("Madonna", "7151181097", 13);
//# sourceMappingURL=oop.js.map