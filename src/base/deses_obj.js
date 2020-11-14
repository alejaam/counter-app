console.log('Hola mundo');

const persona = {
    nombre: 'Alejandro',
    edad: 23,
    clave: 'ale_jaam',
    rango: 'Soldado'
};

// const { nombre } = persona;
// Si ya tenemos una variable con ese nombre, podemos renombrear haciendo lo siguiente:
// const { nombre: nombre2 } = persona; //Este serà un nuevo nombre para la constante nombre y no una copia.

//Desestructurando varias propiedades
// const { edad, clave } = persona;

// console.log(nombre);
// console.log(nombre2);
// console.log(edad);
// console.log(clave);

const useContext = ({nombre, edad, clave, rango = 'Capitán'}) => {
    // console.log(usuario);
    // console.log(nombre, edad, clave, rango);
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.3265,
            lng: -21.6398
        }
    };
    
}

const {nombreClave, anios, latlng: { lat, lng }} = useContext(persona);

console.log(nombreClave, anios, lat, lng);
