/*--------- Global Variables ---------*/
const vinyl = document.querySelector('.record-vinyl');
const recordBorder = document.querySelector('.record-border');
const instructions = document.querySelector('.instructions');
const song = document.querySelector('audio:nth-child(3)');
const playPause = document.querySelector('.play-pause');
let isPlaying = false;

/*--------- Functions ---------*/
function handlePlay() {
  console.log('works')
  // Initial Animations
  document.querySelector('.record-arm').classList.add('move-arm');
  recordBorder.style.pointerEvents = 'none';
  instructions.classList.add('fade-out');
  // Play sequence
  document.querySelector('audio:nth-child(2)').play();
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
};

function togglePlay() {
  vinyl.classList.toggle('spinning');
  isPlaying = !isPlaying,
  isPlaying ? (
    song.pause(),
    playPause.innerHTML = "▶︎"
  ) : (
    song.play(),
    playPause.innerHTML = "||"
  )
};

song.onended = function() {
  vinyl.classList.remove('spinning');
};

/*--------- Event Listeners ---------*/
recordBorder.addEventListener('click', handlePlay, {once: true});
playPause.addEventListener('click', togglePlay);
document.querySelector('.replay').addEventListener('click', function() {
  location.reload();
});
