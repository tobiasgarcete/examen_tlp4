var InventarioViejo = /** @class */ (function () {
    function InventarioViejo() {
        this.items = [];
    }
    InventarioViejo.prototype.addItem = function (nombre) {
        this.items.push({ nombre: nombre });
    };
    InventarioViejo.prototype.getItems = function () {
        return this.items;
    };
    return InventarioViejo;
}());
var AdaptadorInventario = /** @class */ (function () {
    function AdaptadorInventario(inventarioViejo) {
        this.inventarioViejo = inventarioViejo;
        this.equipos = [];
    }
    AdaptadorInventario.prototype.agregarEquipo = function (nombre, tipo, estado) {
        this.inventarioViejo.addItem(nombre);
        this.equipos.push({ nombre: nombre, tipo: tipo, estado: estado });
    };
    AdaptadorInventario.prototype.listarEquipos = function () {
        return this.equipos;
    };
    return AdaptadorInventario;
}());
var inventarioViejo = new InventarioViejo();
var adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
console.log(adaptador.listarEquipos());
