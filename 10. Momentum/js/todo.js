/*
미래의 나에게...
'filter'와 'forEach'를 잘 기억하자.
이것들이 list에 있는 모든 item을 위한 함수를 실행시키는 것이다.
*/

const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){
  const btn = event.target;
  const li = btn.parentNode; 
  toDoList.removeChild(li);
  const cleanToDos = toDos.filter(function(toDo){
    //모든 toDos가 'li'의 id와 같지 않을 때
    return toDo.id !== parseInt(li.id);
  });
  toDos = cleanToDos;
  saveToDos();
}

function saveToDos() {
  //JSON.stringify는 자바스크립트 object를 string으로 바꿔준다.
    //JSON은 'JavaScript Object Notation'의 줄임말이다.
    //데이터를 전달할 때, 자바스크립트가 그걸 다룰 수 있도록 object로 바꿔주는 기능인 셈이다.
  //string으로 바꾸는 이유는 자바스크립트는 Local Storage에 있는 모든 데이터를 string으로만 저장하려고 하기 때문이다.
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo (text) {
  const li = document.createElement("li");
  const delBtn = document.createElement("button");
  
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  
  delBtn.innerHTML = "✔️";
//   delBtn.classList.add("far", "fa-square");
  delBtn.addEventListener("click",deleteToDo);
  span.innerText = text
  li.appendChild (delBtn);
  li.appendChild (span);
  li.id = newId;
  toDoList.appendChild(li);
  const toDoObj = {
    //text라는 key에 text라는 value
    text: text, 
    id: newId
  };
  toDos.push(toDoObj); 
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    //forEach는 array 안에 들어있는 것을 각각에 한 번씩 함수를 실행시켜 준다.
    parsedToDos.forEach(function(toDo){
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
