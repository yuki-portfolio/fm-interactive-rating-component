const buttons         = document.querySelectorAll('.number');
const submitButton    = document.querySelector('.button-submit');
const firstScreen     = document.querySelector('.block-inside');
const secondScreen    = document.querySelector('.block-after');
const resultText      = document.querySelector('.block-selected p');
const ratingsContainer= document.querySelector('.rate-numbers');


let selectedValue = null;

function selectRating(button) {
  buttons.forEach(btn => btn.classList.remove('selected'));
  button.classList.add('selected');
  selectedValue = button.textContent;
}

function showResult() {
  firstScreen .classList.add('after-click');
  secondScreen.classList.add('after-click');
  resultText.innerHTML = `You selected ${selectedValue} out of 5`;
}

function showError() {
  // убираем, чтобы затем заново добавить и запустить анимацию
  submitButton   .classList.remove('wrong');
  ratingsContainer.classList.remove('wrong');
  void submitButton.offsetWidth;
  submitButton   .classList.add('wrong');
  ratingsContainer.classList.add('wrong');
}

function handleSubmit() {
  if (selectedValue) {
    showResult();
  } else {
    showError();
  }
}

export function initRatingComponent() {
    buttons.forEach(btn => {
    btn.addEventListener('click', () => selectRating(btn));
  });
  submitButton.addEventListener('click', handleSubmit);
}