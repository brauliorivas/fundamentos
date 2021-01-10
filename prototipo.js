/* eslint-disable no-useless-constructor */
/* eslint-disable max-classes-per-file */
/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
/* eslint-disable no-plusplus */
/* eslint-disable arrow-body-style */
/* eslint-disable func-names */
/* eslint-disable indent */
/* eslint-disable no-redeclare */
/* eslint-disable vars-on-top */
/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable one-var */
/* eslint-disable no-var */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;// this hace referancia a si mismo
        this.altura = altura;
    }

    saludar(fn) {
        var { nombre, apellido } = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido, false);
        }
    } // saludar es un metodo, del prototipo de tipo persona

    soyAlto() {
        return this.altura > 1.8;
    }// tener cuidado con this y apuntar a window y no al this.obejto.prot
}

class Desarrollador extends Persona { // usamos extends para heredar propiedades de Persona
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura);// super para indicar que se construye igual que el padre
    }

    saludar(fn) { // pasamos una funcion como parametro, no poner ()
        var { nombre, apellido } = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}
 function responderSaludo(nombre, apellido, esDev) { // se ejecuta con el metodo saludar
     console.log(`Buen día ${nombre} ${apellido}`);
     if (esDev) {
         console.log(`Ah mirá, no sabia que eras desarrollador`);
     }
 }
// new crea un nuevo objeto, se le asigna el prototipo o clase Persona
var braulio = new Persona("Braulio", "Rivas", 1.60); // braulio es un obejeto, de prototipo Persona
var henrique = new Persona("Henríque", "Hernández", 1.90);
var juan = new Desarrollador("Juan", "Gómez", 1.80);

braulio.saludar();
henrique.saludar(responderSaludo);// se responder a si solo
juan.saludar(responderSaludo);// el parametro de funcion es responderSaludo
