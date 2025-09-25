var InventarioAntiguo = /** @class */ (function () {
    function InventarioAntiguo() {
        this.items = [];
    }
    InventarioAntiguo.prototype.addItem = function (nombre) {
        this.items.push({ nombre: nombre });
    };
    InventarioAntiguo.prototype.getItems = function () {
        return this.items;
    };
    return InventarioAntiguo;
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
var inventarioViejo = new InventarioAntiguo();
var adaptador = new AdaptadorInventario(inventarioViejo);
adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
console.log(adaptador.listarEquipos());
