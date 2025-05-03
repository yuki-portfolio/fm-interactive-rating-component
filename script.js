const buttons = document.querySelectorAll('.number');
const submit = document.querySelector('.button-submit');
const insideBlock = document.querySelector('.block-inside');
const afterBlock = document.querySelector('.block-after');
const selectedRatingText = document.querySelector('.block-selected p');
const blockNumbers = document.querySelector('.rate-numbers')

let selectedValue = null;

buttons.forEach(btn => {
    btn.addEventListener('click', () => {      // добавляем событие по клику
        btn.classList.toggle('selected');      // меняем состояние-класс после клика
        buttons.forEach((b) => b.classList.remove('selected'));  // с остальных кнопок убираем состояние selected
        btn.classList.add('selected');    // добавляем это состояние той кнопке которую выбрали
        selectedValue = btn.textContent;  // записываем число которое выбрали
    })
})

submit.addEventListener('click', () => {
    if (selectedValue) {
        insideBlock.classList.add('after-click');
        afterBlock.classList.add('after-click');

        selectedRatingText.innerHTML = `You selected ${selectedValue} out of 5`

    } if (!selectedValue) {
        submit.classList.remove('wrong');
        blockNumbers.classList.remove('wrong');

        void blockNumbers.offsetWidth;
        void submit.offsetWidth;

        submit.classList.add('wrong');
        blockNumbers.classList.add('wrong');

        return;
    }
})