var video = document.getElementById('video');
var playBtn = document.getElementById('play-btn');
var speedSelect = document.getElementById('speed-select');
var fullscreenBtn = document.getElementById('fullscreen-btn');
var progressContainer = document.getElementById('progress-container');
var progressBarRange = document.getElementById('progress-bar-range');
var volumeRange = document.getElementById('volume-range');

video.addEventListener('timeupdate', function () {
  var progress = (video.currentTime / video.duration) * 100;
  progressBarRange.value = progress;
});

volumeRange.addEventListener('input', function () {
  var volume = volumeRange.value / 100;
  video.volume = volume;
});

video.addEventListener('volumechange', function () {
  var volume = video.volume * 100;
  volumeRange.value = volume;
});


progressBarRange.addEventListener('input', function () {
  var progress = progressBarRange.value;
  var currentTime = (progress / 100) * video.duration;
  video.currentTime = currentTime;
});

video.addEventListener('volumechange', function () {
  if (video.muted) {
    volumeBtn.innerHTML = '&#128263;';
  } else {
    volumeBtn.innerHTML = '&#128266;';
  }
});


playBtn.addEventListener('click', function () {
  if (video.paused) {
    video.play();
    playBtn.innerHTML = '&#10074;&#10074;';
  } else {
    video.pause();
    playBtn.innerHTML = '&#9658;';
  }
});

speedSelect.addEventListener('change', function () {
  video.playbackRate = parseFloat(speedSelect.value);
});

fullscreenBtn.addEventListener('click', function () {
  if (video.requestFullscreen) {
    video.requestFullscreen();
  } else if (video.mozRequestFullScreen) {
    video.mozRequestFullScreen();
  } else if (video.webkitRequestFullscreen) {
    video.webkitRequestFullscreen();
  }
});