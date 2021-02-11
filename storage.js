class Storage{

 constructor(){

    this.city = city;
    this.state = state;
    this.defaultcity = 'Hyderabad';
    this.defaultstate = 'Telangana';
 }

    getLocationData() {

    if(localStorage.getItem('city') === null){

       this.city = this.defaultcity;

    }
    else{

       this.city = localStorage.getItem('city');

    }
    if(localStorage.getItem('state') === null){

        this.state = this.defaultstate;


    }else{

        this.state = localStorage.getItem('state');
    }

    return{

        city:this.city,
        state:this.state
    }


    }

    setLocationData(city , country){

        localStorage.setItem('city' , city);
        localStorage.setItem('state' , state);


    }
 }


