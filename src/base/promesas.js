import { getHeroById } from './bases/import_export';

// const promesa = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // console.log('2 segundos después');
//         const heroe = getHeroById(1);
//         // resolve(heroe);
//         reject("No se pudo enontrar el heroe");
//     }, 2000);
// });

// promesa.then((heroe) => {
//     console.log('Heroe', heroe);
    
// }).catch(err => console.warn(err));

const getHeroesByIdAsync = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // console.log('2 segundos después');
            const heroe = getHeroById(id);
            if (heroe) {
                resolve(heroe);
            } else {
                reject("No se pudo enontrar el heroe");
            }
        }, 2000);
    });
};

getHeroesByIdAsync(1).then(console.log).catch(err => console.warn(err));