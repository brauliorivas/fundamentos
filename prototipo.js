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

function heredar(prototipoHijo, prototipoPadre) {
    var Fn = function () {};
    Fn.prototype = prototipoPadre.prototype;
    // eslint-disable-next-line new-parens
    prototipoHijo.prototype = new Fn;
    prototipoHijo.prototype.constructor = prototipoHijo;
}
function Persona(nombre, apellido, altura) {
    this.nombre = nombre;
    this.apellido = apellido;// this hace referancia a si mismo
    this.altura = altura;
}

Persona.prototype.saludar = function () { // prototype, hace referencia al objeto
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`);
    // saludar es un metodo, del prototipo de tipo persona
};
// Persona.prototype.soyAlto = function () {
//     if (this.altura > 1.8) {
//         console.log(`Soy alto porque mido ${this.altura} metros`);
//     } else {
//         console.log(`Soy bajo porque mido ${this.altura} metros`);
//     }
// };
Persona.prototype.soyAlto = function () {
    return this.altura > 1.8; // tener cuidado con this y apuntar a window y no al this.obejto.prot
};
function Desarrollador(nombre, apellido) {
    this.nombre = nombre;
    this.apellido = apellido;
}

heredar(Desarrollador, Persona);

Desarrollador.prototype.saludar = function () {
    console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador`);
};
// new crea un nuevo objeto, se le asigna el prototipo Persona()
var braulio = new Persona("Braulio", "Rivas", 1.60); // braulio es un obejeto, de prototipo Persona
var cesar = new Persona("Cesar", "Ampuero", 1.70);
var henrique = new Persona("Henríque", "Hernández", 1.90);
var juan = new Desarrollador("Juan", "Gómez");
