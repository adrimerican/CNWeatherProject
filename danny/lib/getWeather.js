
const fetch = require("node-fetch");
require('dotenv').config();

const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,gb&units=metric&appid=${process.env.APPID}`;

const getWeather = async() => {
    let data = await fetch(url);
    return await data.json();
}

module.exports = getWeather;