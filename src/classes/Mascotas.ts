export class Mascota {
    constructor(public nombre: string, public nivelDeFelicidad: number) {}
  
    alimentar() {
      this.nivelDeFelicidad += 20;
    }
  
    jugar() {
      this.nivelDeFelicidad += 30;
    }
  
    cuidar() {
      this.nivelDeFelicidad += 10;
    }
  
    get estado() {
      return {
        nombre: this.nombre,
        nivelDeFelicidad: this.nivelDeFelicidad,
      };
    }
}

const perro = new Mascota("Firulais", 0);
const gato = new Mascota("Salem", 0);

perro.alimentar();
gato.alimentar();
gato.cuidar();
perro.jugar();

console.log(perro.estado);
console.log(gato.estado);
