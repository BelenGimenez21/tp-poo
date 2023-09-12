export class Libro {
    private titulo: string;
    private autor: string;
    private prestado: boolean;
  
    constructor(titulo: string, autor: string) {
      this.titulo = titulo;
      this.autor = autor;
      this.prestado = false;
    }
  
    prestar() {
      if (!this.prestado) {
        this.prestado = true;
        console.log(`El libro "${this.titulo}" ha sido prestado.`);
      } else {
        console.log(`El libro "${this.titulo}" ya está prestado.`);
      }
    }
  
    devolver() {
      if (this.prestado) {
        this.prestado = false;
        console.log(`El libro "${this.titulo}" ha sido devuelto.`);
      } else {
        console.log(`El libro "${this.titulo}" no estaba prestado.`);
      }
    }
  
    estaPrestado() {
      return this.prestado;
    }
  
    obtenerTitulo() {
      return this.titulo;
    }
}
