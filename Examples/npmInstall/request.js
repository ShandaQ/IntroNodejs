var request = require('request');
// request('http://hellohappy.org', function(err, response, body){
//   console.log(body);
// });

// var city = process.argv[2];
// request({
//   url: 'http://api.openweathermap.org/data/2.5/weather',
//   qs:{
//     q: city,
//     units: 'imperial',
//     APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
//   }
// }, function(err, response, body){
//   //console.log(body);
//
//   //body is a string and converts it to a javascrip object
//   var data = JSON.parse(body);
//   console.log('Temp: ' + data.main.temp);
// });


/*
getWeather function
Inputs:
 - city - name of city
 - callback - continuation to be called when the data arrives,
  Inputs:
    * err- null if successfull, erro object if not
    * data - contain the data
*/
var city = process.argv[2];
getWeather(city, function(err, data){
  if(err){
    console.log('Get weather falied: ' + err.stack);
    return;
  }
    console.log('weather ' + data.weather[0].description);
    console.log('Temp ' + data.main.temp);
});

function getWeather(city, callback){
  request({
    url: 'http://api.openweathermap.org/data/2.5/weather',
    qs:{
      q: city,
      units: 'imperial',
      APPID: 'eac2948bfca65b78a8c5564ecf91d00e'
    }
  }, function(err, response, body){
    if(err){
      // if there is an error, pass that err to the callback function
      // error the url/ host
      callback(err);
      return;
    }

    var data = JSON.parse(body);

    // if there is an error with the infomation that is returned it will go here, and placed in data
    // console.log(data);
    if(Number(data.cod) >= 400){
      // contructor, make a new error object
      var error = new Error(data.message);
      callback(error);
      return;
    }

    // if there are no errors, pass null and the data to the getWeather function call
    callback(null, data);
  });
}
