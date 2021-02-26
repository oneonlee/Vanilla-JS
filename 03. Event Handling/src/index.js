const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/

const js_h2 = document.querySelector("h2");

const superEventHandler = {
  mouseOver: function () {
    js_h2.innerHTML = "The mouse is here!";
    js_h2.style.color = colors[0];
  },
  mouseLeave: function () {
    js_h2.innerHTML = "The mouse is gone!";
    js_h2.style.color = colors[1];
  },
  resize: function () {
    js_h2.innerHTML = "You just resized!";
    js_h2.style.color = colors[2];
  },
  contextMenu: function () {
    js_h2.innerHTML = "That was a right click!";
    js_h2.style.color = colors[3];
  }
};
js_h2.addEventListener("mouseover", superEventHandler.mouseOver);
js_h2.addEventListener("mouseleave", superEventHandler.mouseLeave);
window.addEventListener("resize", superEventHandler.resize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
