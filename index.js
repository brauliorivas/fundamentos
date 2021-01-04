/* eslint-disable no-console */
/* eslint-disable prefer-template */
/* eslint-disable one-var */
/* eslint-disable no-var */
/* eslint-disable one-var-declaration-per-line */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
var nombre = "Braulio", apellido = "Rivas";

var nombreMayuscula = nombre.toUpperCase();
var apellidominuscula = apellido.toLowerCase();

var primeraLetraNombre = nombre.charAt(0);
var cantidadLetrasNombre = nombre.length;

var nombreCompleto = `${nombre} ${apellido}`;
var str = nombre.substr(1, 2);
console.log(nombre.charAt(cantidadLetrasNombre - 1));
