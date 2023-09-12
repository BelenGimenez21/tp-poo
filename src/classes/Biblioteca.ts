import { Libro } from './Libros'

export class Biblioteca {
    private librosDisponibles: Libro[];
    private librosPrestados: Libro[];
  
    constructor() {
      this.librosDisponibles = [];
      this.librosPrestados = [];
    }
  
    public agregarLibro(libro: Libro) {
      this.librosDisponibles.push(libro);
    }
  
    public prestarLibro(titulo: string) {
      const libro = this.buscarLibroPorTitulo(titulo);
      if (libro) {
        libro.prestar();
        this.librosDisponibles = this.librosDisponibles.filter((l) => l !== libro);
        this.librosPrestados.push(libro);
      } else {
        console.log(`El libro "${titulo}" no se encuentra en la biblioteca.`);
      }
    }
  
    public devolverLibro(titulo: string) {
      const libro = this.buscarLibroPorTitulo(titulo);
      if (libro) {
        libro.devolver();
        this.librosPrestados = this.librosPrestados.filter((l) => l !== libro);
        this.librosDisponibles.push(libro);
      } else {
        console.log(`El libro "${titulo}" no pertenece a esta biblioteca.`);
      }
    }
  
    private buscarLibroPorTitulo(titulo: string) {
      return [...this.librosDisponibles, ...this.librosPrestados].find(
        (libro) => libro.obtenerTitulo() === titulo
      );
    }
  
    public listarLibrosDisponibles() {
      console.log('Libros disponibles:');
      this.librosDisponibles.forEach((libro) =>
        console.log(`- "${libro.obtenerTitulo()}"`)
      );
    }
  
    public listarLibrosPrestados() {
      console.log('Libros prestados:');
      this.librosPrestados.forEach((libro) =>
        console.log(`- "${libro.obtenerTitulo()}"`)
      );
    }
}

const miBiblioteca = new Biblioteca();

const libro1 = new Libro('El Señor de los Anillos', 'J.R.R. Tolkien');
const libro2 = new Libro('Cien años de soledad', 'Gabriel García Márquez');
const libro3 = new Libro('Juego de Tronos I', 'George R. R. Martin');

miBiblioteca.agregarLibro(libro1);
miBiblioteca.agregarLibro(libro2);
miBiblioteca.agregarLibro(libro3)

miBiblioteca.listarLibrosDisponibles();

miBiblioteca.prestarLibro('El Señor de los Anillos');
miBiblioteca.listarLibrosDisponibles();
miBiblioteca.listarLibrosPrestados();

miBiblioteca.devolverLibro('El Señor de los Anillos');
miBiblioteca.listarLibrosDisponibles();

miBiblioteca.listarLibrosPrestados();
