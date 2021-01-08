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

const MAYORIA_EDAD = 18;

var braulio = {
    nombre: "Braulio",
    apellido: "Rivas",
    edad: 16,
    ingeniero: true,
    desarrollador: true,
    cantante: false,
    artista: false,
    dj: false,
};

var jose = {
    nombre: "Jose",
    apellido: "Gómez",
    edad: 20,
};

function profesion(persona) {
    console.log(`${persona.nombre} es:`);

    if (persona.ingeniero) {
        console.log("Ingeniero");
    } else {
        console.log("No es ingeniero");
    }

    if (persona.desarrollador) {
        console.log("desarrollador");
    }

    if (persona.cantante) {
        console.log("cantante");
    }

    if (persona.artista) {
        console.log("artista");
    }

    if (persona.dj) {
        console.log("dj");
    }
}

const menorEdad = ({ edad }) => edad <= MAYORIA_EDAD;

const retorna = ({ edad }) => edad >= MAYORIA_EDAD; // con el => indica que es una funcion
// no es necesario poner parentesis para una variable, si es una accion, se puede quitar llave
// retorna el valor si necesidad de escribir return
// ({ x }) accede al atributo de una objeto rapidamente

// function mayoredad(persona) {
//     if (retorna(persona)) {
//         console.log(`${persona.nombre} es mayor de edad`);
//     } else {
//         console.log(`${persona.nombre} es menor de edad`);
//     }
// }

function menor(persona) {
    if (!menorEdad(persona)) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

function permiteAcceso(persona) {
    if (!retorna(persona)) {
        console.log(`ACCESO DENEGADO`);
    }
}
