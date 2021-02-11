

//inint storage class
const storage = new Storage();

const weatherlocation = storage.getLocationData();

const weather = new Weather(weatherlocation.city , weatherlocation.state);

//init ui

const ui = new UI();

document.addEventListener('DOMContentLoaded' , getWeather);

document.getElementById('w-change-btn').addEventListener('click' , (e)=>{

    const city = document.querySelector('#city').value;
    const state = document.querySelector('#state').value;

 weather.changeLocation(city , state);


//get weather
 getWeather();

//close modal by query
  $('#locModal').modal('hide');

});


function getWeather()
 {
    weather.getWeather()
    .then((results)=>{
       // console.log(results);
        ui.paint(results)
        })
    .catch((error)=>console.log(error))
}