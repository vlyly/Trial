const musicPlayerLayer = document.querySelector(".musicPlayer-Layer");
const musicItem = document.querySelectorAll(".musicItem");
const musicPlayerLayer_popup = document.querySelector(
  ".musicPlayer-popup-container"
);
const quitButton = document.querySelector(".musicPlayer-quitButton");

function clickMusicItem() {
  const musicInfo = this.id;
  const showMoreButton = document.createElement("button");
  const playerMusic = document.createElement("audio");
  const albumImage = document.createElement("img");
  const musicDetail = this.querySelector(".musicDetail").cloneNode(true);
  const musicTitle = musicDetail.querySelector(".musicTitle");
  const artist = musicDetail.querySelector(".artist");

  albumImage.src = `./trial02-musicPlayList/${musicInfo}.jpg`;
  albumImage.alt = `${musicInfo} 앨범아트`;
  albumImage.classList.add("musicPlayer-albumCoverImage");

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
    // const textSlide_container = document.createElement("div");
    const textSlide = document.createElement("marquee");
    const musicTitle_copy = musicTitle.cloneNode(true);

    textSlide.behavior = "scroll";
    textSlide.scrollAmount = "4";
    textSlide.classList.add("hasLongTitle");
    musicTitle.style.overflow = "visible";
    textSlide.appendChild(musicTitle);
    musicDetail.insertBefore(textSlide, artist);
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
    while (musicPlayerLayer_popup.childElementCount > 1) {
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
