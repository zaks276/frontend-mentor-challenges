const radioButtons = document.querySelectorAll('[data-radio-buttons]');
const ratingBlock = document.querySelector('[data-rating-block]');
const thankYouBlock = document.querySelector('[data-thank-you-block]');
const output = document.querySelector('[data-output]');
const submit = document.querySelector('[data-submit]');

submit.addEventListener('click', () => {
    let ratingValue = 0;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            ratingValue = radioButton.value;
            break;
        }
    }

    if (ratingValue !== 0) {
        output.innerText = ratingValue;

        ratingBlock.style.display = 'none';
        thankYouBlock.style.animation = 'flip 1s';
        thankYouBlock.style.display = 'block';
    }

});

