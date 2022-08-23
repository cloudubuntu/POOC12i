console.log("Ejercicio 2");

/*2-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
Una propiedad titular con el valor "Alex".
Una propiedad saldo, teniendo como valor inicial 0.
Un método ingresar() que permita añadir dinero a la cuenta, pasando la cantidad como parámetro
Un método extraer() que permita retirar la cantidad pasada como parámetro.
Un método informar() que retorne la información del estado de la cuenta. 

Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a mostrar la descripción del estado de la cuenta.
*/

class Programa {
  constructor(nuevoNombre) {
    (this.nombre = nuevoNombre), (this.saldo = 0);
  }

  ingresar(dinero) {
    this.saldo += dinero; //this.saldo=this.saldo+dinero//
    document.write("<br> Ingresos exitoso, el saldo es de $ " + this.saldo);
  }

  extraer(dinero) {
    if (this.saldo < dinero) {
      document.write("<br>Saldo insuficiente, el saldo es de $ " + this.saldo);
    } else {
      this.saldo -= dinero; //this.saldo=this.saldo-dinero//
      document.write("<br>Extraccion exitosa, el saldo es de $ " + this.saldo);
    }
  }

  informar() {
    document.write(
      "<br> La cuenta del titular: " +
        this.nombre +
        ", posee un saldo de $ " +
        this.saldo
    );
  }
}

let cuentaAlex = new Programa("Alex");
console.log(cuentaAlex);

cuentaAlex.informar();

cuentaAlex.ingresar(10000);

cuentaAlex.informar();

cuentaAlex.extraer(3500);

cuentaAlex.informar();

cuentaAlex.extraer(7000);

