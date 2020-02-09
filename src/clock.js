
 const clockContainer = document.querySelector(".js-clock-container"),
  clock = clockContainer.querySelector(".js-clock");

function getTime() {
  const currentTime = new Date();
  const hour = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  clock.innerHTML = `${hour < 10 ? `0${hour}` : `${hour}`} : ${
    minutes < 10 ? `0${minutes}` : `${minutes}`
  } : ${seconds < 10 ? `0${seconds}` : `${seconds}`}`;
}

function init() {
  setInterval(getTime, 1000);
  // getTime();
}

init();
