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

var braulio = {
    nombre: "Braulio",
    apellido: "Rivas",
    edad: 16,
    peso: 70,
};
const RAZON = 0.200;
const DIAS_YEAR = 365;

console.log(`Al inicio del año ${braulio.nombre} pesa ${braulio.peso} kg.`);

const aumenta = (persona) => persona.peso += RAZON;
const disminuye = (persona) => persona.peso -= RAZON;

for (var i = 0; i <= DIAS_YEAR; i++) {
    var random = Math.random();

    if (random < 0.25) {
        aumenta(braulio);
    } else if (random < 0.5) {
        disminuye(braulio);
    }
}

console.log(`Al final del año ${braulio.nombre} pesa ${(braulio.peso).toFixed(1)} kg.`);
