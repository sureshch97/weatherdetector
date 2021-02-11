class Weather{

  constructor(city , country){

    this.apikey ='ba280ac21b7dce4de2f934be28abfd3e';
    this.city = city;
    this.country = country;
  }
   async getWeather(){
   // const responce = await fetch(`http://api.openweathermap.org/data/2.5/group?q=${this.city},${this.country}&APPID=${this.apikey}&units=metrics`);
   
    const responce = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.country}&APPID=${this.apikey}`);

   const responceData = await responce.json();

   return responceData;

   }

   changeLocation(city,country){
      
    this.city = city;
    this.country = country;

   }

  }

