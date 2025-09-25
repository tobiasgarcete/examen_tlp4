
abstract class Equipo {
  constructor(
    public nombre: string,
    public ram: string,
    public procesador: string
  ) {}

  abstract detalles(): string;
}


class Servidor extends Equipo {
  detalles(): string {
    return `Servidor ${this.nombre} con ${this.ram} RAM y procesador ${this.procesador}`;
  }
}

class Desktop extends Equipo {
  detalles(): string {
    return `Desktop ${this.nombre} con ${this.ram} RAM y procesador ${this.procesador}`;
  }
}

class Notebook extends Equipo {
  detalles(): string {
    return `Notebook ${this.nombre} con ${this.ram} RAM y procesador ${this.procesador}`;
  }
}


class EquipoFactory {
  crearEquipo(tipo: string, nombre: string, ram: string, procesador: string): Equipo {
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
  }
}


const factory = new EquipoFactory();
const server = factory.crearEquipo("Servidor", "Dell PowerEdge", "32GB", "Xeon");

console.log(server.detalles());
