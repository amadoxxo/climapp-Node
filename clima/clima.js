const axios = require('axios');

let getClima = async(lat, lon) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=d56297d1d93a9070d5121703a6392856`);

    return resp.data.main.temp;
};


module.exports = {
    getClima,
};