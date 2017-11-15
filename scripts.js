const moveSelectionBackward = (selectedButton) => {
  selectedButton.classList.remove('selectedButton');
  selectedButton.previousElementSibling.classList.add('selectedButton');
}

const moveSelectionForward = (selectedButton) => {
  selectedButton.classList.remove('selectedButton');
  selectedButton.nextElementSibling.classList.add('selectedButton');
}

const moveSelectionToBeginning = (selectedButton, firstButton) => {
  selectedButton.classList.remove('selectedButton');
  firstButton.classList.add('selectedButton');
}

const moveSelectionToEnd = (selectedButton, lastButton) => {
  selectedButton.classList.remove('selectedButton');
  lastButton.classList.add('selectedButton');
}

document.addEventListener('DOMContentLoaded', () => {
  const firstButton = document.querySelector('#ButtonsGroup').firstElementChild;

  firstButton.classList.add('selectedButton');

  document.addEventListener('keydown', (e) => {
    const selectedButton = document.getElementsByClassName('selectedButton')[0];
    const lastButton = document.querySelector('#ButtonsGroup').lastElementChild;

    if (e.which === 40) {
      !selectedButton.nextElementSibling
        ? moveSelectionToBeginning(selectedButton, firstButton)
        : moveSelectionForward(selectedButton)
    } else if (e.which === 38) {
      !selectedButton.previousElementSibling
        ? moveSelectionToEnd(selectedButton, lastButton)
        : moveSelectionBackward(selectedButton)
    }
  })
})
