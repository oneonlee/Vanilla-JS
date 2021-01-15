import "./styles.css";

/* You're gonna need this
const NINE_HOURS_MILLISECONDS = 32400000; */

const timer = document.querySelector("h2");

function getTime() {
  // Don't delete this.
  var currentDay = new Date();

  const xmasDay = new Date("2021-12-24:00:00:00+0900");
  var gap = xmasDay.getTime() - currentDay.getTime(); // 경과 시간, ms 단위

  var transDay = parseInt(gap / (1000 * 60 * 60 * 24), 10); // 경과시간 중 일 단위
  var transHour = parseInt(gap / (1000 * 60 * 60), 10) % 24; // 경과시간 중 시 단위
  var transMin = parseInt(gap / (1000 * 60), 10) % 60; // 경과시간 중 분 단위
  var transSec = parseInt(gap / 1000, 10) % 60; // 경과시간 중 초 단위

  timer.innerText = `${transDay}d ${
    transHour < 10 ? `0${transHour}` : transHour
  }h ${transMin < 10 ? `0${transMin}` : transMin}m ${
    transSec < 10 ? `0${transSec}` : transSec
  }s`;
}

function init() {
  getTime();
  setInterval(getTime, 500);
}

init();
