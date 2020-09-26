const bgColorChangeButton = document.getElementById("bgColorChangeButton");
const body = document.querySelector("body");

function bgColorChange() {
  if (body.style.backgroundColor === "rgb(250, 219, 224)") {
    body.style.backgroundColor = "rgb(38, 38, 51)";
  } else {
    body.style.backgroundColor = "rgb(250, 219, 224)";
  }
}

bgColorChangeButton.addEventListener("click", bgColorChange);
