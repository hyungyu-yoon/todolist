const API_KEY = "2c2004afe4544135e57b3427767fa32e";

const COORDS = "coords";


const  weatherContainer = document.querySelector(".js-weather-container"),
  city = weatherContainer.querySelector(".city"),
  temp = weatherContainer.querySelector(".temp"),
  weather = weatherContainer.querySelector(".weather");

function saveCoords(coords) {
  localStorage.setItem(COORDS, JSON.stringify(coords));
}

function handleGeoSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coords = {
    latitude,
    longitude
  };

  saveCoords(coords);
  getWhether(coords);
}

function handleGeoError() {
  console.log("error");
}

function getCoords() {
  navigator.geolocation.getCurrentPosition(handleGeoSuccess, handleGeoError);
}

function getWhether(coords) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${
      coords.latitude
    }&lon=${coords.longitude}&units=metric&appid=${API_KEY}`
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      city.innerText = `${json.name} 날씨는?`;
      temp.innerText = `현재 온도 : ${json.main.temp}`;
      weather.innerText = `현재 날씨 : ${json.weather[0].main}`;
    });
}

function loadCoords() {
  const coords = JSON.parse(localStorage.getItem(COORDS));
  if (coords === null) {
    getCoords();
  } else {
    getWhether(coords);
  }
}

function init() {
  loadCoords();
}

init();
