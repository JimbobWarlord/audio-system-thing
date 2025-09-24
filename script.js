document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("container");
  const audio = document.getElementById("my-audio");

  const regions = [
    {
      id: "enter-hallownest",
      show: "NOW PLAYING - ENTER HALLOWNEST",
      audio: "02.mp3",
      top: "25%",
      left: "25%",
      width: "50px",
      height: "50px",
    },
    {
      id: "dirtmouth",
      show: "NOW PLAYING - DIRTMOUTH",
      audio: "03.mp3",
      top: "16%",
      left: "30%",
      width: "315px",
      height: "90px",
    },
    {
      id: "forgotten-crossroads",
      show: "NOW PLAYING - FORGOTTEN CROSSROADS",
      audio: "04.mp3",
      top: "28%",
      left: "38%",
      width: "220px",
      height: "110px",
    },
    {
      id: "forgotten-crossroads-2",
      show: "NOW PLAYING - FORGOTTEN CROSSROADS",
      audio: "04.mp3",
      top: "41.7%",
      left: "47%",
      width: "130px",
      height: "35px",
    },
    {
      id: "forgotten-crossroads-3",
      show: "NOW PLAYING - FORGOTTEN CROSSROADS",
      audio: "04.mp3",
      top: "46%",
      left: "47%",
      width: "90px",
      height: "90px",
    },
    {
      id: "greenpath",
      show: "NOW PLAYING - GREENPATH",
      audio: "09.mp3",
      top: "31%",
      left: "2%",
      width: "400px",
      height: "100px",
    },
    {
      id: "city-of-tears",
      show: "NOW PLAYING - CITY OF TEARS",
      audio: "16.mp3",
      top: "50%",
      left: "55%",
      width: "260px",
      height: "150px",
    },
    {
      id: "city-of-tears-2",
      show: "NOW PLAYING - CITY OF TEARS",
      audio: "16.mp3",
      top: "64%",
      left: "47.7%",
      width: "80px",
      height: "38px",
    },
    {
      id: "crystal-peak",
      show: "NOW PLAYING - CRYSTAL PEAK",
      audio: "20.mp3",
      top: "10%",
      left: "58%",
      width: "205px",
      height: "190px",
    },
    {
      id: "abandoned-temple",
      show: "NOW PLAYING - ABANDONED TEMPLE",
      audio: "23.mp3",
      top: "30%",
      left: "50%",
      width: "50px",
      height: "40px",
    },
    {
      id: "fungal-wastes",
      show: "NOW PLAYING - FUNGAL WASTES",
      audio: "26.mp3",
      top: "42%",
      left: "42%",
      width: "40px",
      height: "270px",
    },
    {
      id: "fungal-wastes-2",
      show: "NOW PLAYING - FUNGAL WASTES",
      audio: "26.mp3",
      top: "53%",
      left: "35.5%",
      width: "74px",
      height: "135px",
    },
    {
      id: "fungal-wastes-3",
      show: "NOW PLAYING - FUNGAL WASTES",
      audio: "26.mp3",
      top: "57.5%",
      left: "45.5%",
      width: "70px",
      height: "50px",
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
    {
      id: "fog-canyon",
      show: "NOW PLAYING - FOG CANYON",
      audio: "30.mp3",
      top: "44%",
      left: "29%",
      width: "147px",
      height: "70px",
    },
    {
      id: "soul-sanctum",
      show: "NOW PLAYING - SOUL SANCTUM",
      audio: "31.mp3",
      top: "50%",
      left: "64%",
      width: "40px",
      height: "80px",
    },
    {
      id: "resting-grounds",
      show: "NOW PLAYING - RESTING GROUNDS",
      audio: "32.mp3",
      top: "34%",
      left: "64%",
      width: "300px",
      height: "85px",
    },
    {
      id: "resting-grounds-2",
      show: "NOW PLAYING - RESTING GROUNDS",
      audio: "32.mp3",
      top: "41%",
      left: "59%",
      width: "130px",
      height: "40px",
    },
    {
      id: "resting-grounds-3",
      show: "NOW PLAYING - RESTING GROUNDS",
      audio: "32.mp3",
      top: "44.6%",
      left: "70%",
      width: "26px",
      height: "44px",
    },
    {
      id: "resting-grounds-4",
      show: "NOW PLAYING - RESTING GROUNDS",
      audio: "32.mp3",
      top: "26%",
      left: "77%",
      width: "38px",
      height: "65px",
    },
    {
      id: "royal-waterways",
      show: "NOW PLAYING - ROYAL WATERWAYS",
      audio: "34.mp3",
      top: "70%",
      left: "45.7%",
      width: "330px",
      height: "75px",
    },
    {
      id: "queens-gardens",
      show: "NOW PLAYING - QUEEN'S GARDENS",
      audio: "36.mp3",
      top: "44%",
      left: "7%",
      width: "245px",
      height: "160px",
    },
    {
      id: "kingdoms-edge",
      show: "NOW PLAYING - KINGDOM'S EDGE",
      audio: "41.mp3",
      top: "51%",
      left: "82.5%",
      width: "180px",
      height: "165px",
    },
    {
      id: "kingdoms-edge-2",
      show: "NOW PLAYING - KINGDOM'S EDGE",
      audio: "41.mp3",
      top: "69%",
      left: "75%",
      width: "60px",
      height: "120px",
    },
    {
      id: "dream",
      show: "NOW PLAYING - DREAM",
      audio: "43.mp3",
      top: "25%",
      left: "81%",
      width: "67px",
      height: "50px",
    },
    {
      id: "white-palace",
      show: "NOW PLAYING - WHITE PALACE",
      audio: "46.mp3",
      top: "86%",
      left: "64%",
      width: "90px",
      height: "68px",
    },
    {
      id: "the-hive",
      show: "NOW PLAYING - THE HIVE",
      audio: "48.mp3",
      top: "73%",
      left: "81%",
      width: "65px",
      height: "70px",
    },
    {
      id: "deepnest",
      show: "NOW PLAYING - DEEPNEST",
      audio: "51.mp3",
      top: "65%",
      left: "1%",
      width: "387px",
      height: "145px",
    },
    {
      id: "deepnest-2",
      show: "NOW PLAYING - DEEPNEST",
      audio: "51.mp3",
      top: "77%",
      left: "35%",
      width: "120px",
      height: "50px",
    },
    {
      id: "colosseum",
      show: "NOW PLAYING - COLOSSEUM OF FOOLS",
      audio: "67.mp3",
      top: "45%",
      left: "77%",
      width: "80px",
      height: "40px",
    },
    {
      id: "abyss",
      show: "NOW PLAYING - THE ABYSS",
      audio: "78.mp3",
      top: "93%",
      left: "57.5%",
      width: "50px",
      height: "25px",
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
      const src = region.audio;
      if (!audio.src.endsWith(src)) {
        audio.src = src;
        audio.currentTime = 0;
        audio.volume = 0.25;
        audio.play().catch(() => {});
      } else {
        if (audio.paused) audio.play().catch(() => {});
      }
      footer.innerHTML = region.show;
    });

    document.addEventListener("keydown", function (event) {
      if (event.key.toLowerCase() === "s") {
        audio.pause();
        audio.currentTime = 0;
        footer.innerHTML = "CREATED BY JAMES WARLOND";
      }
    });

    container.appendChild(area);
  });
});

const settingsScreen = document.getElementById("settings-screen");
const settingsBtn = document.getElementById("settings");
const mapScreen = document.getElementById("map-screen");
const musicListScreen = document.getElementById("music-list-screen");
const musicListBtn = document.getElementById("music-list");
const infoScreen = document.getElementById("info-screen");
const infoBtn = document.getElementById("info");
const backBtn = document.getElementById("back-to-map");
const backBtn2 = document.getElementById("back-to-map-2");
const backBtn3 = document.getElementById("back-to-map-3");

musicListBtn.addEventListener("click", () => {
  mapScreen.classList.add("hidden");
  musicListScreen.classList.remove("hidden");
  musicListScreen.scrollTop = 0;
});

settingsBtn.addEventListener("click", () => {
  mapScreen.classList.add("hidden");
  settingsScreen.classList.remove("hidden");
});

infoBtn.addEventListener("click", () => {
  mapScreen.classList.add("hidden");
  infoScreen.classList.remove("hidden");
});

backBtn.addEventListener("click", () => {
  musicListScreen.classList.add("hidden");
  mapScreen.classList.remove("hidden");
});

backBtn2.addEventListener("click", () => {
  settingsScreen.classList.add("hidden");
  mapScreen.classList.remove("hidden");
});

backBtn3.addEventListener("click", () => {
  infoScreen.classList.add("hidden");
  mapScreen.classList.remove("hidden");
});

const audioSelect = document.getElementById("my-audio");
const musiclisting = document.querySelectorAll("#song-select");

musiclisting.forEach((button) => {
  button.addEventListener("click", () => {
    const src = button.dataset.src;
    const title = button.textContent.trim();
    audioSelect.src = src;
    audioSelect.currentTime = 0;
    audioSelect.play();
    audioSelect.volume = 0.25;
    footer.innerHTML = "NOW PLAYING - " + title;
    console.log("Work");
  });
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
