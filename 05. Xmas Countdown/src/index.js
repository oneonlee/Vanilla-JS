//import "./styles.css";

const timer = document.querySelector("h2");

// You're gonna need this
function getTime() {
  // Don't delete this.
  const xmasDay = new Date("2021-12-25:00:00:00+0900");
  var currentTime = new Date();
  var timeDifference = xmasDay - currentTime;

  var msToDay = parseInt(timeDifference / (1000 * 60 * 60 * 24), 10); // 경과시간 중 일 단위
  var msToHour = parseInt(timeDifference / (1000 * 60 * 60), 10) % 24; // 경과시간 중 시 단위
  var msToMin = parseInt(timeDifference / (1000 * 60), 10) % 60; // 경과시간 중 분 단위
  var msToSec = parseInt(timeDifference / 1000, 10) % 60; // 경과시간 중 초 단위

  timer.innerText = `${msToDay}d ${
    msToHour < 10 ? `0${msToHour}` : msToHour
  }h ${msToMin < 10 ? `0${msToMin}` : msToMin}m ${
    msToSec < 10 ? `0${msToSec}` : msToSec
  }s`;
}

function init() {
  setInterval(getTime, 500);
}
init();
