var Automovil = /** @class */ (function () {
    function Automovil(motor, color) {
        this.motor = motor;
        this.color = color;
    }
    Automovil.prototype.frenar = function () {
        console.log("Frenar");
    };
    return Automovil;
}());
var Autobus = /** @class */ (function () {
    function Autobus(motor, color) {
        this.motor = motor;
        this.color = color;
    }
    Autobus.prototype.frenar = function () {
        console.log("Frenar");
    };
    return Autobus;
}());
