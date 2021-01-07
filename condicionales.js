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

function mayoredad(persona) {
    if (persona.edad >= 18) {
        console.log(`${persona.nombre} es mayor de edad`);
    } else {
        console.log(`${persona.nombre} es menor de edad`);
    }
}

mayoredad(braulio);
mayoredad(jose);
