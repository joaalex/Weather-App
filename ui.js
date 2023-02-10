class Ui{
  constructor(){
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string')
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint = document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
    
  };


  showPopup(){

    this.dontRepForm();

    const div = document.createElement('div');
    const locDiv = document.getElementById('changeLocDiv');
    div.id ='closeForm'
   
    div.innerHTML = `
     <div class="container mt-4 mb-4 " style= "width: 40%;">
     <form action=""  class="rounded bg-secondary p-5 ">
        <a href="" id="closeForm" class="closeForm float-end">&times;</a>

        <h3>Choose Location</h3>
   
       <div class="form-group">
         <label for="city">City</label>
         <input type="text" class="form-control" id="city">
       </div>

       <div class="form-group">
         <label for="state">State</label>
         <input type="text" class="form-control" id="state">
       </div>

       <button type="button" id="close" class="btn btn-info close mt-2 ">Close</button>

       <br>

       <button type="button" id="saveChange" class="btn btn-primary saveChange mt-2">Save Change</button>

     </form>
     </div>
     `;
   
     locDiv.appendChild(div);
  };

  dontRepForm(){
    const currentForm = document.getElementById('closeForm');

    if(currentForm){
      currentForm.remove();
    };
  };

  getFormInput(e){
    if(e.target.classList.contains('saveChange') ){
      const city = document.getElementById('city').value;
      const state = document.getElementById('state').value;
      
      if(city && state !== ''){
      weather.changeLocation(city, state)
      getWeather();
      document.getElementById('city').value = ''
      document.getElementById('state').value ='';
  
      e.target.parentElement.parentElement.parentElement.remove();
      } else{
        console.log('Working')
      }
  
      e.preventDefault()
    };
  };


  closePopup(e){
    if(e.target.classList.contains('closeForm')){
      e.target.parentElement.parentElement.parentElement.remove();
    };
  };

  closePopupii(e){
    if(e.target.classList.contains('close')){
      e.target.parentElement.parentElement.parentElement.remove();
    };
  };

  paint(weather) {
    this.location.textContent = weather.display_location.full;
    this.desc.textContent = weather.weather;
    this.string.textContent = weather.temperature_string;
    this.icon.setAttribute('src', weather.icon_url);
    this.humidity.textContent = `Relative Humidity:${weather.relative_humidity}`;
    this.feelsLike.textContent = `Feels Like:${weather.feelslike_string}`;
    this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
    this.wind.textContent = `Wind: ${weather.wind_string}`;

  };
};