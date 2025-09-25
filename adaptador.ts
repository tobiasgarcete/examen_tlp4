
class InventarioViejo {
  items: { nombre: any }[];
  constructor() {
    this.items = [];
  }

  addItem(nombre: any) {
    this.items.push({ nombre }); 
  }

  getItems() {
    return this.items;
  }
}



class AdaptadorInventario {
  inventarioViejo: InventarioViejo;
  equipos: { nombre: string; tipo: string; estado: string }[];
  constructor(inventarioViejo: InventarioViejo) {
    this.inventarioViejo = inventarioViejo;
    this.equipos = [];
  }

  agregarEquipo(nombre: string, tipo: string, estado: string) {
    this.inventarioViejo.addItem(nombre);
    this.equipos.push({ nombre, tipo, estado });
  }

  listarEquipos() {
    return this.equipos;
  }
}

const inventarioViejo = new InventarioViejo();
const adaptador = new AdaptadorInventario(inventarioViejo);

adaptador.agregarEquipo("Router Cisco", "Red", "disponible");
console.log(adaptador.listarEquipos());
