document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const audio = document.getElementById("my-audio");

  const regions = [
    {
      id: "city-of-tears",
      show: "NOW PLAYING - CITY OF TEARS",
      audio: "16.mp3",
      top: "50%",
      left: "55%",
      width: "250px",
      height: "145px",
    },
    {
      id: "greenpath",
      show: "NOW PLAYING - GREENPATH",
      audio: "09.mp3",
      top: "30%",
      left: "2%",
      width: "400px",
      height: "100px",
    },
    {
      id: "crystal-peak",
      show: "NOW PLAYING - CRYSTAL PEAK",
      audio: "20.mp3",
      top: "10%",
      left: "57%",
      width: "215px",
      height: "200px",
    },
    {
      id: "mantis-lords",
      show: "NOW PLAYING - MANTIS LORDS",
      audio: "29.mp3",
      top: "70%",
      left: "36.5%",
      width: "50px",
      height: "50px",
    },
  ];

  regions.forEach((region) => {
    const area = document.createElement("div");
    area.id = region.id;
    area.classList.add("hover");

    area.style.top = region.top;
    area.style.left = region.left;
    area.style.width = region.width;
    area.style.height = region.height;

    area.addEventListener("mouseenter", () => {
      audio.src = region.audio;
      audio.currentTime = 0;
      audio.play();
      audio.volume = 0.25;
      footer.innerHTML = region.show;
    });

    area.addEventListener("mouseleave", () => {
      audio.pause();
      audio.currentTime = 0;
      footer.innerHTML = "CREATED BY JAMES WARLOND";
    });

    container.appendChild(area);
  });
});

const settingsScreen = document.getElementById("settings-screen");
const settingsBtn = document.getElementById("settings");
const mapScreen = document.getElementById("map-screen");
const musicListScreen = document.getElementById("music-list-screen");
const musicListBtn = document.getElementById("music-list");
const backBtn = document.getElementById("back-to-map");
const backBtn2 = document.getElementById("back-to-map-2");

musicListBtn.addEventListener("click", () => {
  mapScreen.classList.add("hidden");
  musicListScreen.classList.remove("hidden");
});

settingsBtn.addEventListener("click", () => {
  mapScreen.classList.add("hidden");
  settingsScreen.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  musicListScreen.classList.add("hidden");
  mapScreen.classList.remove("hidden");
});

backBtn2.addEventListener("click", () => {
  settingsScreen.classList.add("hidden");
  mapScreen.classList.remove("hidden");
});

const audioSelect = document.getElementById("my-audio");

const cityOfTearsBtn = document.getElementById("city-of-tears-select");
cityOfTearsBtn.addEventListener("click", () => {
  audioSelect.src = "16.mp3";
  audioSelect.currentTime = 0;
  audioSelect.play();
  audioSelect.volume = 0.25;
  footer.innerHTML = "NOW PLAYING - CITY OF TEARS";
});

const greenpathBtn = document.getElementById("greenpath-select");
greenpathBtn.addEventListener("click", () => {
  audioSelect.src = "09.mp3";
  audioSelect.currentTime = 0;
  audioSelect.play();
  audioSelect.volume = 0.25;
  footer.innerHTML = "NOW PLAYING - GREENPATH";
});

const crystalpeakBtn = document.getElementById("crystal-peak-select");
crystalpeakBtn.addEventListener("click", () => {
  audioSelect.src = "20.mp3";
  audioSelect.currentTime = 0;
  audioSelect.play();
  audioSelect.volume = 0.25;
  footer.innerHTML = "NOW PLAYING - CRYSTAL PEAK";
});

const mantislordsBtn = document.getElementById("mantis-lords-select");
mantislordsBtn.addEventListener("click", () => {
  audioSelect.src = "29.mp3";
  audioSelect.currentTime = 0;
  audioSelect.play();
  audioSelect.volume = 0.25;
  footer.innerHTML = "NOW PLAYING - MANTIS LORDS";
});

const nightmarekingBtn = document.getElementById("nightmare-king-select");
nightmarekingBtn.addEventListener("click", () => {
  audioSelect.src = "54.mp3";
  audioSelect.currentTime = 0;
  audioSelect.play();
  audioSelect.volume = 0.25;
  footer.innerHTML = "NOW PLAYING - NIGHTMARE KING";
});

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "r") {
    document.body.style.background = "radial-gradient(#782623, black)";
  }
});

document.addEventListener("keydown", function (event) {
  if (event.key.toLowerCase() === "b") {
    document.body.style.background = "radial-gradient(#253a5c, black)";
  }
});
