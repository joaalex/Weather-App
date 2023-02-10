class Weather{
  constructor(city,state){
    this.city = city
    this.state  =state
    this.apiKey = ''
    this.lat = '8.6753° '
    this.lon ='9.0820°'
    this.exclude = 'current'
  }

async getWeather(){
  const response = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${this.lat}&lon=${this.lon}&exclude=${this.exclude}&appid=${this.apiKey}`);

  const resDate = await response.json()

  return resDate.current_observation;
}


changeLocation(city,state){
  this.city = city;
  this.state = state;
}
}