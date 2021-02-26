var show = document.getElementById("showRange");
var limitGenerator = document.getElementById("limitGenerator");
var userGuess = document.getElementById("userGuess");
// const playButton = document.getElementById("playButton");
const button = document.querySelector("button");
const answer = document.getElementById("answer");
const result = document.getElementById("result");

function updateValue(event) {
  event.preventDefault();
  const max = limitGenerator.value;
  show.innerHTML = `Generate a number between 0 and ${max}`;
}

limitGenerator.addEventListener("input", updateValue);

button.addEventListener("click", (event) => {
  const max = limitGenerator.value;
  var rand = Math.floor(Math.random() * (parseInt(max, 10) + 1)); // 0 ~ max 사이의 랜덤 float 값을 생성, max를 포함.
  console.log(max);
  answer.innerHTML = `You choose: ${userGuess.value}, The machine chose: ${rand}`;
  if (parseInt(userGuess.value, 10) === rand) {
    result.innerHTML = "<b>You Won!</b>";
  } else {
    result.innerHTML = "<b>You Lost!</b>";
  }
});
