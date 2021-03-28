const startBtn = document.getElementById("start");

function bomb() {
  document.getElementById(
    "app"
  ).innerHTML = `<img src="assets/img/explode.gif" id="boooom" />`;
}

function getTime(msValue) {
  let msToHour = parseInt(msValue / (1000 * 60 * 60), 10) % 24; // 경과시간 중 시 단위
  let msToMin = parseInt(msValue / (1000 * 60), 10) % 60; // 경과시간 중 분 단위
  let msToSec = parseInt(msValue / 1000, 10) % 60; // 경과시간 중 초 단위

  document.getElementById("time").innerText = `${
    msToHour < 10 ? `0${msToHour}` : msToHour
  } ${msToMin < 10 ? `0${msToMin}` : msToMin} ${
    msToSec < 10 ? `0${msToSec}` : msToSec
  }`;
}

function setTime() {
  startBtn.addEventListener("click", (event) => {
    const hour = document.getElementById("userHour").value;
    const min = document.getElementById("userMin").value;
    const sec = document.getElementById("userSec").value;

    let initValue = hour * 3600000 + min * 60000 + sec * 1000;

    let interval = setInterval(function () {
      if (initValue === 0) {
        bomb();
        clearInterval(interval);
      } else {
        getTime(initValue);
        initValue = initValue - 1000;
      }
    }, 1000);
    console.log(initValue);
  });
}

function init() {
  setTime();
}

init();
