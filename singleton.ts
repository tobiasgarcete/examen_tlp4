class Configuracion {
  private static instancia: Configuracion;
  private configuracion: { [key: string]: any };

  private constructor() {
    this.configuracion = {};
  }

  public static obtenerInstancia(): Configuracion {
    if (!Configuracion.instancia) {
      Configuracion.instancia = new Configuracion();
    }
    return Configuracion.instancia;
  }

  public set(key: string, value: any): void {
    this.configuracion[key] = value;
  }

  public get(key: string): any {
    return this.configuracion[key];
  }
}

const conf1 = Configuracion.obtenerInstancia();
const conf2 = Configuracion.obtenerInstancia();

conf1.set("modo", "producción");

console.log(conf2.get("modo")); 