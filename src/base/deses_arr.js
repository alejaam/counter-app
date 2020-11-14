const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [, , p1] = personajes;

console.log(p1);


const retornaArreglo = () => {
    return ['ABC', 123]
};

const [letras, numeros] = retornaArreglo();

console.log(letras, numeros);

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

const [nombre, setNombre] = useState('Goku');
console.log('nombre', nombre)
setNombre();
// console.log(arr.setNombre(arr.nombre));