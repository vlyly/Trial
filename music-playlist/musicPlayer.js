const musicPlayerLayer = document.querySelector(".musicPlayer-Layer");
const musicItem = document.querySelectorAll(".musicItem");
const musicPlayerLayer_popup = document.querySelector(
  ".musicPlayer-popup-container"
);
const musicDetailhaha = document.querySelector(".musicDetail");
const quitButton = document.querySelector(".musicPlayer-quitButton");

function closePlayer() {
  while (musicPlayerLayer_popup.childNodes.length > 2) {
    musicPlayerLayer_popup.removeChild(musicPlayerLayer_popup.lastChild);
  }

  musicPlayerLayer.style.display = "";
}

function clickMusicItem() {
  const musicInfo = this.id;
  const playerMusic = document.createElement("audio");
  const albumImage = document.createElement("img");
  const musicDetail = this.querySelector(".musicDetail").cloneNode(true);
  const musicTitle = musicDetail.firstElementChild;
  const artist = musicDetail.lastElementChild;

  if (musicTitle.innerText.length > 30) {
    const textSlide_container = document.createElement("div");
    const musicTitle_copy = musicTitle.cloneNode(true);

    textSlide_container.appendChild(musicTitle_copy);
    musicDetail.insertBefore(textSlide_container, musicTitle);
    textSlide_container.appendChild(musicTitle);

    textSlide_container.classList.add("text-slide");
    musicDetail.classList.add("longTitle");
  }

  albumImage.src = `./trial02-musicPlayList/${musicInfo}.jpg`;
  albumImage.alt = `${musicInfo} 앨범아트`;
  albumImage.classList.add("musicPlayer-albumImage");

  musicDetail.classList.add("align-items");

  playerMusic.src = `./trial02-musicPlayList/${musicInfo}.mp3`;
  playerMusic.type = "audio/mpeg";
  playerMusic.controls = true;
  playerMusic.classList.add("musciPlayer-controller");

  musicPlayerLayer_popup.appendChild(albumImage);
  musicPlayerLayer_popup.appendChild(musicDetail);
  musicPlayerLayer_popup.appendChild(playerMusic);

  musicPlayerLayer.style.display = "flex";
}

quitButton.addEventListener("click", closePlayer);

Array.from(musicItem).forEach((item) =>
  item.addEventListener("click", clickMusicItem)
);
