const request = require('request');
const argv = require('yargs').argv;

let apiKey = 'abe2e2c40d599587032228c1f1b0572b';
let city = argv.c || 'baltimore';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;

request(url, function(err, response, body){
  if(err){
    console.log('error:', err);
  }else {
    let weather = JSON.parse(body);

    let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
    console.log(message);
  }
});
