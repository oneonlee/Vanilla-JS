const taskForm = document.getElementById("js-form"),
  taskInput = document.getElementById("js-input"),
  pending = document.getElementById("js-pending"),
  finished = document.getElementById("js-finished");

let pendingList = [];
let finishedList = [];

function savePending() {
  localStorage.setItem("PENDING", JSON.stringify(pendingList));
}

function saveFinished() {
  localStorage.setItem("FINISHED", JSON.stringify(finishedList));
}

function moveUp(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;

  if (ul.id === "js-pending") {
    // delete
    pending.removeChild(li);
    const removePending = pendingList.filter(function (task) {
      return task.id !== li.id;
    });
    pendingList = removePending;
    savePending();
    saveFinished();
  } else if (ul.id === "js-finished") {
    // move
    pending.appendChild(li);
    const cleanPending = finishedList.filter(function (task) {
      return task.id === li.id;
    });
    const removePending = finishedList.filter(function (task) {
      return task.id !== li.id;
    });
    finishedList = removePending;
    pendingList.push(cleanPending[0]);
    saveFinished();
    savePending();
  }
}

function moveDown(event) {
  const btn = event.target;
  const li = btn.parentNode;
  const ul = li.parentNode;

  if (ul.id === "js-pending") {
    // move
    finished.appendChild(li);
    const cleanPending = pendingList.filter(function (task) {
      return task.id === li.id;
    });
    const removePending = pendingList.filter(function (task) {
      return task.id !== li.id;
    });
    pendingList = removePending;
    finishedList.push(cleanPending[0]);
    savePending();
    saveFinished();
  } else if (ul.id === "js-finished") {
    // delete
    finished.removeChild(li);
    const removeFinished = finishedList.filter(function (task) {
      return task.id !== li.id;
    });
    finishedList = removeFinished;
    savePending();
    saveFinished();
  }
}

function guid() {
  function s4() {
    return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
  }
  return (
    s4() +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    "-" +
    s4() +
    s4() +
    s4()
  );
}

function paintTask(text, part) {
  // part ex> pending or finished
  const li = document.createElement("li");
  const upBtn = document.createElement("button");
  const downBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = guid();
  span.innerText = text;
  upBtn.innerText = "▲";
  downBtn.innerText = "▼";
  upBtn.addEventListener("click", moveUp);
  downBtn.addEventListener("click", moveDown);
  part.appendChild(li);
  li.appendChild(span);
  li.appendChild(upBtn);
  li.appendChild(downBtn);
  li.id = newId;
  const taskObj = {
    text: text,
    id: newId
  };
  if (part === pending) {
    pendingList.push(taskObj);
    savePending();
  } else if (part === finished) {
    finishedList.push(taskObj);
    saveFinished();
  }
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = taskInput.value;
  paintTask(currentValue, pending);
  taskInput.value = "";
}

function loadPending() {
  const lastedfinish = localStorage.getItem("FINISHED");
  if (lastedfinish !== null) {
    const parsedTofinish = JSON.parse(lastedfinish);
    parsedTofinish.forEach(function (tofi) {
      paintTask(tofi.text, finished);
    });
  }
}

function loadFinished() {
  const lasteddoing = localStorage.getItem("PENDING");
  if (lasteddoing !== null) {
    const parsedToDos = JSON.parse(lasteddoing);
    parsedToDos.forEach(function (toDo) {
      paintTask(toDo.text, pending);
    });
  }
}

function init() {
  loadPending();
  loadFinished();
  taskForm.addEventListener("submit", handleSubmit);
}

init();
