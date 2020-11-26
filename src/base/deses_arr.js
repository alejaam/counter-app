const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p1] = personajes;

export const retornaArreglo = () => {
    return ['ABC', 123]
};

const [letras, numeros] = retornaArreglo();

// Tarea
//  1.- La primera posición del arreglo se llamará nombre
//  2.- la segunda posición se llamará setNombre
const useState = (valor) => {
    return [valor,
        () => {
            console.log('Hola mundo');
        }
    ];
};