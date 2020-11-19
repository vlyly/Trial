const musicPlayerLayer = document.querySelector(".musicPlayer-Layer");
const musicItem = document.querySelectorAll(".musicItem");
const musicPlayerLayer_popup = document.querySelector(
  ".musicPlayer-popup-container"
);
const quitButton = document.querySelector(".musicPlayer-quitButton");
const showMoreButton = document.createElement("button");

function clickMusicItem() {
  const musicInfo = this.id;
  const playerMusic = document.createElement("audio");
  const albumImage = document.createElement("img");
  const musicDetail = this.querySelector(".musicDetail").cloneNode(true);
  const musicTitle = musicDetail.firstElementChild;
  const artist = musicDetail.lastElementChild;

  albumImage.src = `./trial02-musicPlayList/${musicInfo}.jpg`;
  albumImage.alt = `${musicInfo} 앨범아트`;
  albumImage.classList.add("musicPlayer-albumImage");

  musicDetail.classList.add("align-items");
  musicDetail.classList.add("musicPlayer-musicDetail");

  playerMusic.src = `./trial02-musicPlayList/${musicInfo}.mp3`;
  playerMusic.type = "audio/mpeg";
  playerMusic.controls = true;
  playerMusic.classList.add("musicPlayer-controller");

  musicPlayerLayer_popup.appendChild(albumImage);
  musicPlayerLayer_popup.appendChild(musicDetail);
  musicPlayerLayer_popup.appendChild(playerMusic);

  musicPlayerLayer.style.display = "flex";

  if (musicTitle.scrollWidth > 190) {
    const textSlide_container = document.createElement("div");
    const musicTitle_copy = musicTitle.cloneNode(true);

    textSlide_container.appendChild(musicTitle_copy);
    musicDetail.insertBefore(textSlide_container, musicTitle);
    textSlide_container.appendChild(musicTitle);

    textSlide_container.classList.add("text-slide");
    musicDetail.classList.add("longTitle");
  }

  if (artist.scrollWidth > 190) {
    showMoreButton.classList.add("showMoreButton");

    musicDetail.appendChild(showMoreButton);
  }

  function artist_showMore() {
    artist.classList.toggle("showMoreArtist");
    showMoreButton.classList.toggle("showMoreButton_close");
  }

  function closePlayer() {
    while (musicPlayerLayer_popup.childNodes.length > 2) {
      musicPlayerLayer_popup.removeChild(musicPlayerLayer_popup.lastChild);
    }
    musicPlayerLayer.style.display = "";
  }

  showMoreButton.addEventListener("click", artist_showMore);
  quitButton.addEventListener("click", closePlayer);
}

function init() {
  Array.from(musicItem).forEach((item) =>
    item.addEventListener("click", clickMusicItem)
  );
}

init();
