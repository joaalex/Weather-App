const weather = new Weather('Ikeja', 'Lagos');
const ui = new Ui();
const storage = new Storage();


const changeLocForm =(e) =>{
  ui.showPopup();
  e.preventDefault();
};
document.getElementById('changeLoc').addEventListener('click', changeLocForm)


const closingPop = (e) =>{
  ui.closePopup(e);
  ui.closePopupii(e)
  e.preventDefault()
};
document.getElementById('changeLocDiv').addEventListener('click', closingPop);


document.addEventListener('DOMContentLoaded', getWeather)


function getWeather(){
  weather.getWeather()
  .then(wData => {
    ui.paint(wData)
  })
  .catch(err => console.log(err))
};




document.getElementById('changeLocDiv').addEventListener('click', (e)=>{
    ui.getFormInput(e)
    e.preventDefault()
  });

