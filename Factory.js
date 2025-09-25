var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Equipo = /** @class */ (function () {
    function Equipo(nombre, ram, procesador) {
        this.nombre = nombre;
        this.ram = ram;
        this.procesador = procesador;
    }
    return Equipo;
}());
var Servidor = /** @class */ (function (_super) {
    __extends(Servidor, _super);
    function Servidor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Servidor.prototype.detalles = function () {
        return "Servidor ".concat(this.nombre, " con ").concat(this.ram, " RAM y procesador ").concat(this.procesador);
    };
    return Servidor;
}(Equipo));
var Desktop = /** @class */ (function (_super) {
    __extends(Desktop, _super);
    function Desktop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Desktop.prototype.detalles = function () {
        return "Desktop ".concat(this.nombre, " con ").concat(this.ram, " RAM y procesador ").concat(this.procesador);
    };
    return Desktop;
}(Equipo));
var Notebook = /** @class */ (function (_super) {
    __extends(Notebook, _super);
    function Notebook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Notebook.prototype.detalles = function () {
        return "Notebook ".concat(this.nombre, " con ").concat(this.ram, " RAM y procesador ").concat(this.procesador);
    };
    return Notebook;
}(Equipo));
var EquipoFactory = /** @class */ (function () {
    function EquipoFactory() {
    }
    EquipoFactory.prototype.crearEquipo = function (tipo, nombre, ram, procesador) {
        switch (tipo) {
            case "Servidor":
                return new Servidor(nombre, ram, procesador);
            case "Desktop":
                return new Desktop(nombre, ram, procesador);
            case "Notebook":
                return new Notebook(nombre, ram, procesador);
            default:
                throw new Error("Tipo de equipo no reconocido");
        }
    };
    return EquipoFactory;
}());
var factory = new EquipoFactory();
var server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");
console.log(server.detalles());
