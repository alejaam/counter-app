const persona = {
    nombre: 'Alejandro',
    aplelido: 'Alamar',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 15270,
        lat: 14.3265,
        long: 34.5698
    }
}

// console.table({persona});
console.log({
    persona
});

const persona2 = {
    ...persona
};
persona2.nombre = 'Nebai';
console.log(persona2);