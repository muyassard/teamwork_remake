const boxElm = document.querySelectorAll(".box");
const leftBtnElm = document.querySelector(".leftBtn");
const rightBtnElm = document.querySelector(".rightBtn");
const boxesElm = document.querySelector(".boxes");

let idx = 0;

function changeBox() {
  if (idx > boxElm.length - 4) {
    idx = 0;
  } else if (idx < 0) {
    idx = boxElm.length - 4;
  }
  boxesElm.style.transform = `translateX(${-idx * 308}px)`;
}
rightBtnElm.addEventListener("click", function change() {
  idx++;
  changeBox();
});

leftBtnElm.addEventListener("click", function change() {
  idx--;
  changeBox();
});
