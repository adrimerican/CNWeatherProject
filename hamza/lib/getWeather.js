const fetch = require("node-fetch");
const APPID = "2c62c24727abdfa20dff48cf1e1e009b";
require("dotenv").config();

const url = `http://api.openweathermap.org/data/2.5/weather?q=Manchester,uk&units=metric&appid=${process.env.APPID}`;

const getWeather = async () => {
  let data = await fetch(url);
  return await data.json();
};

module.exports = getWeather;
