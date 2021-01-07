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

var braulio = {
    nombre: "Braulio",
    apellido: "Rivas",
    edad: 16,
};

var jose = {
    nombre: "Jose",
    apellido: "Swap",
    edad: 20,
};

function imprimirMayusculas(persona) {
    // var persona = persona.nombre;//
    var { nombre } = persona;
    console.log(nombre.toUpperCase());
}

imprimirMayusculas(braulio);
imprimirMayusculas(jose);
imprimirMayusculas({ nombre: "Pepe" });

function imprimirNombreEdad(persona) {
    var { nombre } = persona;
    var { edad } = persona;
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`);
}

imprimirNombreEdad(braulio);
imprimirNombreEdad(jose);

function birthday(persona) {
    return {
        ...persona,
        edad: persona.edad + 1,
    };
}

var viejo = birthday(jose);
