const argv = require('./CONFIG/yargs').argv;
const colors = require('colors/safe');

var salida = colors.green;

const { crearArchivo, listarArchivo } = require('./MULTIPLICAR/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        console.log('crear');
        crearArchivo(argv.base, argv.limite)
            .then(
                archivo => console.log('Archivo creado: ', salida(archivo))
            )
            .catch(
                e => console.log(e)
            );
        break;

    case 'listar':
        console.log('listar');
        listarArchivo(argv.base, argv.limite)
            .then(
                //listado => console.log(`${listado}`)

            )
            .catch(
                e => console.log(e)
            );
        break;

    default:
        console.log('Comando no reconocido.');
        break;
}

//console.log(argv);


//let base = '10';

//console.log(argv.base);
//console.log(argv2);
//let parametro = argv[2];
//let base = parametro.split('=')[1]

/*  */