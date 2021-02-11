
class UI {

  constructor(){
    this.ulElement = document.querySelector('#w-details');
    this.location = document.querySelector('#w-location');
     this.desc = document.querySelector('#w-desc');
     this.string = document.querySelector('#w-string');
     this.details = document.querySelector('#w-details');
     this.icon = document.querySelector('#w-icon');
     this.humidity = document.querySelector('#w-humidity');
     this.dewpoint = document.querySelector('#w-dewpoint');
     this.feelslike = document.querySelector('#w-feels-like');
     this.pressure = document.querySelector('#w-pressure');
     this.wind = document.querySelector('#w-wind');
  }

  paint(weather){
           // console.log(weather);
        if(weather.cod === 200){
             this.ulElement.style.display = 'block';
             this.location.innerHTML = weather.name;
             this.string.innerHTML =`Temp : ${weather.main.temp} kelvin`;
             this.desc.innerHTML = weather.weather[0].description;
             
             this.icon.setAttribute('src', `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
             this.humidity.innerHTML = `Humidity:   ${weather.main.humidity}%`;
             this.feelslike.innerHTML =`feels like: ${weather.main.feels_like}`;
            
             this.pressure.innerHTML=`Pressure: ${weather.main.pressure}`;
             this.wind.innerHTML=`wind speed: ${weather.wind.speed}km/h`;
         }
         else if(weather.cod === "404"){
            this.location.innerHTML ="Weather Updates";
         }
         else{
            this.location.innerHTML = weather.message;
         }
  }


}