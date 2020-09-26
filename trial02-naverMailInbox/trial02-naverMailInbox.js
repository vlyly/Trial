const inboxStar = document.querySelectorAll(".inboxStar");
const mailState = document.querySelectorAll(".mailState");

function bookmark() {
  if (this.className === "inboxStar") {
    this.classList.add("inboxStarBookmarked");
  } else {
    this.classList.remove("inboxStarBookmarked");
  }
}

function readMail() {
  const tr = this.parentElement.parentElement.parentElement;

  if (tr.className === "unread") {
    tr.classList.add("read");
  } else {
    tr.classList.remove("read");
  }
}

inboxStar.forEach((item) => item.addEventListener("click", bookmark));
mailState.forEach((item) => item.addEventListener("click", readMail));
