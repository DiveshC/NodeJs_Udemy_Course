const chalk = require('chalk');
const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

const addr = process.argv[2];
if(!addr){
    console.log('please provide an address');
}else{
        
    geocode(addr, (error, {latitude, longitude, location}) =>{
        if(error){
            return console.log(error);
        }
        forecast(latitude, longitude, (error, forecastData) => {
            if(error){
                return console.log(error);
            }
            console.log(location);
            console.log('Data', forecastData);
        });
    });

}


