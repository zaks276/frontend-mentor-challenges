const adviceId = document.querySelector('[data-advice-id]');
const adviceQuote = document.querySelector('[data-advice]');
const adviceButton = document.querySelector('[data-advice-button]');

async function getAdvice() {
    let res = await fetch('https://api.adviceslip.com/advice');
    let data = await res.json();

    adviceId.textContent = data.slip.id;
    adviceQuote.textContent = data.slip.advice;
}

adviceButton.addEventListener('click', getAdvice);
window.addEventListener('load', getAdvice);
