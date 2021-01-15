/* eslint-disable no-undef */
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

const API_URL = 'https://swapi.dev/api/';
const PEOPLE_URL = 'people/:id';
const opts = { crossDomain: true };

function obtenerPersonajes(id, callback) {
    return new Promise((resolve, reject) => {
        const URL = `${API_URL}${PEOPLE_URL.replace(':id', id)}`;
        $
        .get(URL, opts, (data) => resolve(data))
        .fail(() => reject(id));
    });
}

function onError(id) {
    console.log(`Sucedió un error con el personaje ${id}`);
}

async function obtenerPersonas() {
    var ids = [];
    for (var i = 1; i <= 15; i++) {
        ids.push(i);
    }
    var promesas = ids.map((id) => obtenerPersonajes(id));
    try {
        var personas = await Promise.all(promesas);
        console.log(personas);
        for (var x = 0; x <= 14; x++) {
            console.log(`El personaje ${x + 1} es ${personas[x].name}`);
        }
    } catch (id) {
        onError(id);
    }
}
obtenerPersonas();
// Promise
//     .all(promesas)
//     .then((personajes) => console.log(personajes))
//     .catch(onError);
// obtenerPersonajes(1)
//     .then(personaje => {
//         console.log(`El personaje 1 es ${personaje.name}`);
//         return obtenerPersonajes(2);
//     })
//     .then(personaje => {
//         console.log(`El personaje 2 es ${personaje.name}`);
//         return obtenerPersonajes(3);
//     })
//     .then(personaje => {
//         console.log(`El personaje 3 es ${personaje.name}`);
//         return obtenerPersonajes(4);
//     })
//     .then(personaje => {
//         console.log(`El personaje 4 es ${personaje.name}`);
//         return obtenerPersonajes(5);
//     })
//     .then(personaje => {
//         console.log(`El personaje 5 es ${personaje.name}`);
//         return obtenerPersonajes(6);
//     })
//     .then(personaje => {
//         console.log(`El personaje 6 es ${personaje.name}`);
//         return obtenerPersonajes(7);
//     })
//     .then(personaje => {
//         console.log(`El personaje 7 es ${personaje.name}`);
//         return obtenerPersonajes(8);
//     })
//     .then(personaje => {
//         console.log(`El personaje 8 es ${personaje.name}`);
//     })
//     .catch(onError);
// var retornado;
// for (var i = 1; i <= 10; i++) {
//     obtenerPersonajes(i)
//         .then(personaje => {
//             console.log(`El personaje ${i} es ${personaje.name}`);
//         })
//         .catch(onError);
// };
