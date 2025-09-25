
interface Observador {
  actualizar(nombre: string, estado: string): void;
}


class Soporte implements Observador {
  actualizar(nombre: string, estado: string): void {
    console.log(`Soporte notificado: ${nombre} ha cambiado su estado a ${estado}`);
  }
}


class quipo {
  private observadores: Observador[] = [];

  constructor(
    public nombre: string,
    public tipo: string,
    private estado: string
  ) {}

  agregarObservador(obs: Observador): void {
    this.observadores.push(obs);
  }

  cambiarEstado(nuevoEstado: string): void {
    this.estado = nuevoEstado;
    this.notificar();
  }

  private notificar(): void {
    for (const obs of this.observadores) {
      obs.actualizar(this.nombre, this.estado);
    }
  }
}


const soporte = new Soporte();
const equipo = new quipo("Notebook HP", "Portátil", "disponible");

equipo.agregarObservador(soporte);
equipo.cambiarEstado("en reparación");
