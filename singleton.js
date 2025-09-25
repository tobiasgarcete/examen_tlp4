var Configuracion = /** @class */ (function () {
    function Configuracion() {
        this.settings = {};
    }
    Configuracion.obtenerInstancia = function () {
        if (!Configuracion.instancia) {
            Configuracion.instancia = new Configuracion();
        }
        return Configuracion.instancia;
    };
    Configuracion.prototype.set = function (key, value) {
        this.settings[key] = value;
    };
    Configuracion.prototype.get = function (key) {
        return this.settings[key];
    };
    return Configuracion;
}());
var conf1 = Configuracion.obtenerInstancia();
var conf2 = Configuracion.obtenerInstancia();
conf1.set("modo", "producción");
console.log(conf2.get("modo"));
