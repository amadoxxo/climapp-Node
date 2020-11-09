const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Da como resultado el clima del lugar ingresado',
        demand: true,
    }
}).argv;

// lugar.getLugar(argv.direccion)
//     .then(console.log);

// clima.getClima(40.750000, -74.000000)
//     .then(console.log)
//     .catch(console.log);



const getInfo = async(direccion) => {

    try {
        const cords = await lugar.getLugar(direccion);
        const temp = await clima.getClima(cords.latitud, cords.longitud);

        return `El clima de ${direccion} es de ${temp}ºC`;

    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}`;
    }
};


getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log);