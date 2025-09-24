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
