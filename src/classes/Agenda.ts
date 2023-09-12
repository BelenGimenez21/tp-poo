import { Contacto } from './Contacto'

export class Agenda {
    contactos: Contacto[] = [];
  
    agregarContacto(nombre: string, email: string, telefono: string) {
      const nuevoContacto = new Contacto(nombre, email, telefono);
      this.contactos.push(nuevoContacto);
      console.log(`Contacto ${nombre} agregado.`);
    }
  
    buscarContactoPorNombre(nombre: string) {
      const resultados = this.contactos.filter((contacto) =>
        contacto.nombre.toLowerCase().includes(nombre.toLowerCase())
      );
  
      if (resultados.length === 0) {
        console.log(`No se encontraron contactos con el nombre "${nombre}".`);
      } else {
        console.log(`Resultados de búsqueda para "${nombre}":`);
        resultados.forEach((contacto) => {
          console.log(`Nombre: ${contacto.nombre}`);
          console.log(`Correo electrónico: ${contacto.email}`);
          console.log(`Teléfono: ${contacto.telefono}`);
          console.log('------------------------');
        });
      }
    }
  
    mostrarListaDeContactos() {
      if (this.contactos.length === 0) {
        console.log('La lista de contactos está vacía.');
      } else {
        console.log('Lista de contactos:');
        this.contactos.forEach((contacto) => {
          console.log(`Nombre: ${contacto.nombre}`);
          console.log(`Correo electrónico: ${contacto.email}`);
          console.log(`Teléfono: ${contacto.telefono}`);
          console.log('------------------------');
        });
      }
    }
}
  
const agenda = new Agenda();

agenda.agregarContacto('Belen Gimenez', 'belen@gmail.com', '123-456-7890');
agenda.agregarContacto('Valeria Ojeda', 'valeria@gmail.com', '987-654-3210');
agenda.agregarContacto('Alex Ramirez', 'alex@hotmail.com', '555-123-4567');

agenda.mostrarListaDeContactos();

agenda.buscarContactoPorNombre('alex');
