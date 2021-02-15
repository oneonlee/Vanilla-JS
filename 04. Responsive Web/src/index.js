// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const sizeInfo = document.querySelector("h2");
const body = document.querySelector("body");
const rainbow = [
  "#bc85a3",
  "#cc99c9",
  "#9ec1cf",
  "#9ee09e",
  "#fdfd97",
  "#feb144",
  "#ff6663"
];

function painting() {
  sizeInfo.innerHTML = `Window's size : ${window.innerWidth} x ${window.innerHeight}`;

  if (window.innerWidth > 1300) {
    body.style.backgroundColor = rainbow[0];
  } else if (window.innerWidth > 1000) {
    body.style.backgroundColor = rainbow[1];
  } else if (window.innerWidth > 800) {
    body.style.backgroundColor = rainbow[2];
  } else if (window.innerWidth > 650) {
    body.style.backgroundColor = rainbow[3];
  } else if (window.innerWidth > 500) {
    body.style.backgroundColor = rainbow[4];
  } else if (window.innerWidth > 350) {
    body.style.backgroundColor = rainbow[5];
  } else {
    body.style.backgroundColor = rainbow[6];
  }
}

window.addEventListener("resize", painting);
