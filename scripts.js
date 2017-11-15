document.addEventListener('DOMContentLoaded', () => {
  const firstButton = document.querySelector('.button');

  firstButton.classList.add('selectedButton');
})

document.addEventListener('keydown', (e) => {
  const selectedButton = document.getElementsByClassName('selectedButton')[0];
  const lastButton = document.querySelector('#ButtonsGroup').lastElementChild;
  const firstButton = document.querySelector('.button');
  e.preventDefault();

  if (e.which === 40) {
    // down
    if (!selectedButton.nextElementSibling) {
      selectedButton.classList.remove('selectedButton');
      firstButton.classList.add('selectedButton');
    } else {
      selectedButton.className = 'button';
      selectedButton.nextElementSibling.className = 'button selectedButton';
    }
  } else if (e.which === 38) {
    // up
    if (!selectedButton.previousElementSibling) {
      selectedButton.classList.remove('selectedButton');
      lastButton.classList.add('selectedButton');
    } else {
      selectedButton.previousElementSibling.classList.add('selectedButton');
      selectedButton.classList.remove('selectedButton');
    }
  }
})
