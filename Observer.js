var Soporte = /** @class */ (function () {
    function Soporte() {
    }
    Soporte.prototype.actualizar = function (nombre, estado) {
        console.log("Soporte notificado: ".concat(nombre, " ha cambiado su estado a ").concat(estado));
    };
    return Soporte;
}());
var quipo = /** @class */ (function () {
    function quipo(nombre, tipo, estado) {
        this.nombre = nombre;
        this.tipo = tipo;
        this.estado = estado;
        this.observadores = [];
    }
    quipo.prototype.agregarObservador = function (obs) {
        this.observadores.push(obs);
    };
    quipo.prototype.cambiarEstado = function (nuevoEstado) {
        this.estado = nuevoEstado;
        this.notificar();
    };
    quipo.prototype.notificar = function () {
        for (var _i = 0, _a = this.observadores; _i < _a.length; _i++) {
            var obs = _a[_i];
            obs.actualizar(this.nombre, this.estado);
        }
    };
    return quipo;
}());
var soporte = new Soporte();
var equipo = new quipo("Notebook HP", "Portátil", "disponible");
equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
