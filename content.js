const player = document.querySelector('.PlayerContainer .VideoContainer'); 
const video = document.querySelector('#MainVideoPlayer video');
console.log(player);
let isPlaying = false;
video.addEventListener('play', function() {
  isPlaying = true;
});
video.addEventListener('pause', function() {
  isPlaying = false;
});
player.addEventListener('click', function() {
  if (isPlaying) {
    video.pause();
  } else {
    video.play();
  }
});