const fs = require('fs');

let listarArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`La base ${base} o el limite ${limite} no es un numero`);
            return;
        }

        //let listado = '';
        for (let index = 1; index <= limite; index++) {
            //listado += `${base} * ${index} = ${base * index} \n`;
            resolve(console.log(`${base} * ${index} = ${base * index}`));
        }

        //resolve(listado);
    });

}

let crearArchivo = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`${base} No es un numero`);
            return;
        }

        let data = '';
        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;
        }

        fs.writeFile(`TABLAS/Tabla-${base}-limite-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`Tabla-${base}-limite-${limite}.txt`);
        });

    });
}

module.exports = {
    crearArchivo,
    listarArchivo
}