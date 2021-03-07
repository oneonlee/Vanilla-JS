const status = document.getElementById("status");
const button = document.getElementById("normal");
const span = document.querySelector("span");

let isClick = false;

button.addEventListener("click", (event) => {
  isClick = !isClick;
  if (isClick) {
    // Dark Mode
    console.log("Dark Mode");
    document.body.style = "background-color: black";
    status.innerHTML = `<h1 style="color:white">Dark Mode</h1>`;
    span.innerHTML = `
      <img src="https://sleep.brightspotcdn.com/dims4/default/12ba057/2147483647/strip/true/crop/820x820+0+0/resize/300x300!/quality/100/?url=http%3A%2F%2Fmattress-firm-brightspot.s3.amazonaws.com%2F0f%2F3a%2F11ec97484c6681c6fd75019ba1d4%2Fmoon-icon-3.png" width="300", height="300">
    `;
  } else {
    // Light Mode
    console.log("Light Mode");
    document.body.style = "background-color: white";
    status.innerHTML = `<h1 style="color:black">Light Mode</h1>`;
    span.innerHTML = `
      <img src="http://cdn.onlinewebfonts.com/svg/img_204441.png" width="300", height="300">
    `;
  }
});
