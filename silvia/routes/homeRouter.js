const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    let data = await getWeather('Manchester', 'uk');
    let name = data.name;
    let description = data.weather[0].description;
    let temp = data.main.temp;
    let clouds = data.clouds.all;
    let feelsLike = data.main.feels_like;
    res.render('index', {
        name, 
        data: {temp, clouds, description, feelsLike} 
    });
});

module.exports = router;