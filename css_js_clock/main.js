// Get the seconds hand
const secondHand = document.querySelector('.second-hand'),
  minuteHand = document.querySelector('.min-hand'),
  hourHand = document.querySelector('.hour-hand'),
  allHands = document.querySelectorAll('.hand');

function setDate() {
  const now = new Date();

  // Second hand
  const seconds = now.getSeconds(),
    // Get the degrees for rotation. The 90 added is to accommodate the 90deg offset applied in the transform to make the hands start from top to bottom
    secondsDegrees = (seconds / 60) * 360 + 90;

  // rotate the seconds hand by the secondsDegrees
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  // Minute hand
  const minutes = now.getMinutes(),
    minutesDegrees = (minutes / 60) * 360 + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  // Hour hand
  const hours = now.getHours(),
    hoursDegrees = (hours / 12) * 360 + (minutes / 60) * 30 + 90;
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  // Prevent the reset when seconds hand hits zero
  if (secondsDegrees === 90) {
    allHands.forEach(hand => (hand.style.transition = 'none'));
  } else {
    allHands.forEach(hand => (hand.style.transition = ''));
  }

  // console.log(hours + ':' + minutes + ':' + seconds);
}

setInterval(setDate, 1000);
