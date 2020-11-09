const axios = require('axios');

const getLugar = async(dir) => {

    const encodedUrl = encodeURI(dir);

    const resp = await axios.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${ encodedUrl }.json?access_token=pk.eyJ1IjoiYW1hZG94eG8iLCJhIjoiY2toNzF5OXN6MDdmODJ5cGYybmpibW5sOCJ9.tdrzTmVqJuWHxdayQF4EqA`);

    if (resp.data.features.length === 0) {
        throw new Error(`No existe un resultado para la ubicacion: ${ dir }`);
    }

    const data = resp.data.features[0];
    const ubicacion = data.place_name;
    const tipo = data.place_type;
    const longitud = data.center[0];
    const latitud = data.center[1];

    return {
        ubicacion,
        tipo,
        longitud,
        latitud,
    };

};

module.exports = {
    getLugar,
};