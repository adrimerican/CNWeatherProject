const fetch = require('node-fetch');
require('dotenv').config();

const getWeather = async(location) => {
    let data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.APPID}`);
    return await data.json();
};

module.exports = getWeather;