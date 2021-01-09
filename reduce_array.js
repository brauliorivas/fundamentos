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
    cantidadDeLibros: 111,
};

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86,
    cantidadDeLibros: 78,
};

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85,
    cantidadDeLibros: 132,
};

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71,
    cantidadDeLibros: 90,
};

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56,
    cantidadDeLibros: 91,
};

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76,
    cantidadDeLibros: 182,
};
var personas = [braulio, alan, martin, dario, vicky, paula];

const reducer = (total, { cantidadDeLibros }) => total + cantidadDeLibros;
// creamos la funcion, que tiene la variable inicial, y el parametro del objeto
// reduce se usa con reducer de manera "artificial" y a nuestro gusto
// reduce va de valor en valor de un array
// crea una variable con los key values del array
var totalLibros = personas.reduce(reducer, 0); // llama una funcion, inicializa una varibale en
// ${cero}
// reduce RECUERDA LOS VALORES y los almacena
console.log(`En total hay ${totalLibros} libros`);
