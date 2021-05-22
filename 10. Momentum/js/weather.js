//경도와 위도 받아오기
//API site Link : openweathermap.org
const weather = document.querySelector(".js-weather");

const API_KEY = "9fba8b8d8f7f204372d9d4821a57e404";
const COORDS = 'coords';

function getWeather(lat, lon){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`).then(function(response){
    return response.json();
  })
  .then(function(json) {
    const temprature = json.main.temp;
    const place = json.name;
    weather.innerText = `${temprature} @ ${place}`;
  });
}

function saveCoords(coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSuccess(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = { //객체의 변수 이름과 key값을 같게 저장할 때
    //latitude: latitude,
    latitude,
    longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){

}

function askForCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError)
}

function loadCoords() {
  const loadedCoords = localStorage.getItem(COORDS);
  if(loadedCoords == null){
    askForCoords();
  }else {
    const parseCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init() {
  loadCoords();
}

init();
