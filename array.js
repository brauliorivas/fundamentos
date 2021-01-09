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
    nombre: 'Braulio',
    apellido: 'Rivas',
    altura: 1.60,
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
};

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
};

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
};

var personas = [braulio, alan, martin, dario, vicky, paula];

for (var i = 0; i < personas.length; i++) {
    var persona = personas[i];
    console.log(`${persona.nombre} mide ${persona.altura} metros`);
}

var personaAlta = personas.filter((x) => x.altura > 1.80);
console.log(personaAlta);
var personaBaja = personas.filter((x) => x.altura < 1.80);
console.log(personaBaja);

// eslint-disable-next-line no-shadow
const personasConversion = (persona) => ({
    ...persona,
    altura: persona.altura * 100,
});
var personasCMS = personas.map(personasConversion);
console.log(personasCMS);
