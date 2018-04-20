/*--------- Global Variables ---------*/
const recordArm = document.querySelector('.record-arm');
const vinyl = document.querySelector('.record-vinyl');
const recordBorder = document.querySelector('.record-border');
const instructions = document.querySelector('.instructions');
const song = document.querySelector('audio[data-track="2"');
const playPause = document.querySelector('.play-pause');
let isPlaying = false;

/*--------- Functions ---------*/
const handlePlay = (function() {

  // Creating a closure, so this function can happen only once
  let executed = false;
  return function() {
    if (!executed) {
      executed = true;

      // Initial Animations
      document.querySelector('audio[data-track="1"').play();
      recordArm.classList.add('move-arm');
      recordBorder.style.pointerEvents = 'none';
      instructions.classList.add('fade-out');

      // Play sequence
      setTimeout(function spinVinyl() {
        vinyl.classList.add('spinning');
      }, 2800);
      setTimeout(function playSong() {
        song.play();
        instructions.innerHTML = "Enjoy.";
        instructions.classList.remove('fade-out');
        instructions.classList.add('fade-in');
      }, 6000);
      setTimeout(function addControls() {
        instructions.classList.add('fade-out');
        document.querySelector('.controls').classList.add('fade-in');
      }, 9000);

    }
  };
})();

function togglePlay() {
  isPlaying = !isPlaying,
  isPlaying ? (
    song.pause(),
    playPause.innerHTML = "▶︎",
    vinyl.classList.remove('spinning')
  ) : (
    song.play(),
    playPause.innerHTML = "||",
    vinyl.classList.add('spinning')
  )
};

song.onended = function() {
  vinyl.classList.remove('spinning');
};

/*--------- Event Listeners ---------*/
recordBorder.addEventListener('click', handlePlay);
playPause.addEventListener('click', togglePlay);
document.querySelector('.replay').addEventListener('click', function() {
  location.reload();
});
