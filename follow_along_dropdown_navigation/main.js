const triggers = document.querySelectorAll('.cool > li'),
  background = document.querySelector('.dropdownBackground'),
  nav = document.querySelector('.top');

// reveal the content of the li on mouseenter
function handleEnter() {
  this.classList.add('trigger-enter');

  setTimeout(() => {
    // to ensure the trigger-enter-active is only add only when the
    // when the elmt has the trigger-enter class
    if (this.classList.contains('trigger-enter')) {
      this.classList.add('trigger-enter-active');
    }
  }, 100);

  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown'),
    dropdownCoords = dropdown.getBoundingClientRect(),
    navCoords = nav.getBoundingClientRect();

  const coords = {
    height: dropdownCoords.height,
    width: dropdownCoords.width,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty(
    'transform',
    `translate(${coords.left}px, ${coords.top}px)`
  );
}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger =>
  trigger.addEventListener('mouseenter', handleEnter)
);
triggers.forEach(trigger =>
  trigger.addEventListener('mouseleave', handleLeave)
);
