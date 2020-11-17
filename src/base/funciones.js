const saludar = function saludar(nombre) {
    return `Hola, ${nombre}`;
};

const saludar2 = (nombre) => {
    return `Hola, ${nombre}`;
};

const saludar3 = (nombre) => `Hola, ${nombre}`;

export const getUser = () => ({
    uid: 'ABC123',
    username: 'ale_jaam'
});

const user = getUser();
console.log(user);

// Tarea
//  1. Transformar a una función de flecha
//  2. Tiene que retornar un objeto implicito
//  3. Pruebas
export const getUsuarioActivo = (nombre) => ({
    uid: 'ABC986',
    username: nombre
});

