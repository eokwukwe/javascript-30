const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  console.log('jksksks');

  this.classList.toggle('open');
}

function toggleActive(e) {
  // Toggle the closs only for the flex-grow property
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));

panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
