const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greetings");

/*
'LS' == 'Local Storage' 
'CN' == 'Class Name'
*/

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function askForName() {
  form.classList.add(SHOWING_CN);
/* 
여기까지 했을 때는 이름을 입력해도 사라지기만 한다. 
기본 값이 입력한 내용을 프로그래밍 된 다른 곳으로 보낸 후 새로고침 하는 것이기 때문이다. 
그렇기 때문에 기본 값을 막아줄 것이다.
기본 값을 조절하는 함수가 아래의 handleSubmit 함수이다.
*/
  form.addEventListener("submit", handleSubmit)
}

function handleSubmit(event){ //기본동작 막기 대작전
  //step1: enter쳐도 아무일도 일어나지 않음.
  event.preventDefault();
  /*
  step2: enter치면 "Hello XX"로 바꾸지만 새로고침하면 사라짐.
  왜냐면 저장이 안되어 있기 때문이다.
  */
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function paintGreeting(text) {
  form.classList.remove(SHOWING_CN) //이름을 색칠하려면 form을 숨겨야 됨.
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}!`
}
/* loadName은 localStorage에서 USER_LS의 값을 가져오는 함수 */
function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser == null) {
    // user is not
    askForName();
  } else {
    //user is
    paintGreeting(currentUser);
  } 
}

function init() {
  loadName();
}

init();