
const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/da6ab0b74e7d25bad6db9dcbe2debea8/'+ latitude +','+ longitude
    request({url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to location service!',undefined)
        }else if(response.body.error){
            callback('Unable to find location. Try another search', undefined)
        }else{
            callback(undefined,{
                summary: response.body.currently.summary,
                precipProbability: response.body.currently.precipProbability,
                precipIntensity: response.body.currently.precipIntensity,
                temperature: response.body.currently.temperature
            })
        }
    })
}


module.exports = forecast
