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
const RAZON = 0.3;
const DIAS_YEAR = 365;

console.log(`Al inicio del año ${braulio.nombre} pesa ${braulio.peso} kg.`);

const aumenta = (persona) => persona.peso += RAZON;
const disminuye = (persona) => persona.peso -= RAZON;

const comeMucho = () => Math.random() < 0.3; // Si es menor a 0.3 se ejecuta
const realizaDeporte = () => Math.random() < 0.4; // Si es menor a 0.4 se ejecuta
const META = braulio.peso - 10; // peso ideal
let dias = 0;

while (braulio.peso > META) {
    if (comeMucho()) {
        aumenta(braulio);
    }

    if (realizaDeporte()) {
        disminuye(braulio);
    }
    // no usamos else if porque en este caso, es una disyuncion inclusiva
    // puede subir y ejercitar el mismo dia
    dias += 1;
}

console.log(`Al final de ${dias} dias, ${braulio.nombre} pesa ${(braulio.peso).toFixed(1)} kg.`);

// debugger: herramienta util para saber que esta pasando en el codigo, e indicarnos cada
// accion que va realizando
