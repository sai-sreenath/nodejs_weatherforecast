const request = require('request')

const geocode = (address, callback) => {
    //will crash if not used encoded version,crashes when you give place as '?',if you encoded,it gives %3f
    //const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ address +'.json?access_token=pk.eyJ1Ijoic3JlZW5hdGg1NjUiLCJhIjoiY2p1Y2xqc2w3MDdrZjRkcDhmanV3MzNoMyJ9.62o2v3efMJMy_mAgCNQzhA'    
    const geocodeurl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/'+ encodeURIComponent(address) +'.json?access_token=pk.eyJ1Ijoic3JlZW5hdGg1NjUiLCJhIjoiY2p1Y2xqc2w3MDdrZjRkcDhmanV3MzNoMyJ9.62o2v3efMJMy_mAgCNQzhA'
    request({url: geocodeurl, json: true }, (error,response)=> {
        if(error){
            callback('Unable to connect to location service!',undefined)
        }else if(response.body.features.length === 0){
            callback('Unable to find location. Try another search', undefined)
        }else{
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[0],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode
