const moveSelectionBackward = (selectedButton) => {
  selectedButton.previousElementSibling.focus();
}

const moveSelectionForward = (selectedButton) => {
  selectedButton.nextElementSibling.focus();
}

const moveSelectionToBeginning = (selectedButton, firstButton) => {
  firstButton.focus();
}

const moveSelectionToEnd = (selectedButton, lastButton) => {
  lastButton.focus();
}

document.addEventListener('DOMContentLoaded', () => {
  const firstButton = document.querySelector('#ButtonsGroup').firstElementChild;

  firstButton.focus();

  document.addEventListener('keydown', (e) => {
    const selectedButton = document.querySelector('.button:focus');
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
