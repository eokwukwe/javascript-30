function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

  // stop function from running when the selected key does not match
  if (!audio) return;

  // rewind to the start. This will allow the sound to be replayed
  // immediatelythe key is pressed down multiple times
  audio.currentTime = 0;

  // play sound
  audio.play();

  // add the Animation when a key is pressed
  key.classList.add('playing');
}

function removeTransition(e) {
  // skip it if it's not a transform
  if (e.propertyName !== 'transform') return;

  // this refers to the key pressed (the key the eventListener is attached to)
  this.classList.remove('playing');
}

// listen for the key press
window.addEventListener('keydown', playSound);

// To remove the transition effect after the key is pressed
// use the transitionend event listener
const keys = document.querySelectorAll('.key'); // select all the keys
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
