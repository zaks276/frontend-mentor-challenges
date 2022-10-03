//Inputs
const billAmount = document.querySelector('[data-bill]');
const tipPercentages = document.querySelectorAll('[data-tip-percentage]');
const customPercentage = document.querySelector('[data-custom-percentage]');
const numberOfPeople = document.querySelector('[data-people]');

//Outputs
const tipPerPerson = document.querySelector('[data-per-person-tip]');
const totalPerPerson = document.querySelector('[data-total]');

//Reset
const resetButton = document.querySelector('[data-reset]');

//Errors
const billErrorMessage = document.querySelector('[data-bill-error]');
const tipErrorMessage = document.querySelector('[data-tip-error]');
const peopleErrorMessage = document.querySelector('[data-people-error]');

resetButton.disabled = true;
let billValue = 0;
let tipPercent = 0;
let noOfPeople = 0;

//Calculate amounts
function calculate() {

    if (billValue > 0 && (tipPercent > 0 || tipPercent === 0) && noOfPeople > 0) {
        resetButton.disabled = false;

        let tip = billValue * (tipPercent / 100) / noOfPeople;
        tipPerPerson.textContent = '$' + tip.toFixed(2);

        let total = billValue / noOfPeople + tip;
        totalPerPerson.textContent = '$' + total.toFixed(2);
    }

}

//Event Listeners
billAmount.addEventListener('input', () => {
    if (Number(billAmount.value) < 0) {
        billAmount.classList.add('error');
        billAmount.classList.add('error:focus');
        billErrorMessage.textContent = "Can't be negative";
    } else {
        billAmount.classList.remove('error');
        billAmount.classList.remove('error:focus');
        billErrorMessage.textContent = '';
        billValue = Number(billAmount.value);
        calculate();
    }
});

//Uncheck radio buttons when entering custom value
customPercentage.addEventListener('click', () => {
    for (const tipPercentage of tipPercentages) {
        tipPercentage.checked = false;
    }
});

customPercentage.addEventListener('input', () => {
    if (Number(customPercentage.value) < 0) {
        customPercentage.classList.add('error');
        customPercentage.classList.add('error:focus');
        tipErrorMessage.textContent = "Can't be negative";
    } else {
        customPercentage.classList.remove('error');
        customPercentage.classList.remove('error:focus');
        tipErrorMessage.textContent = '';
        tipPercent = Number(customPercentage.value);
        calculate();
    }
});

//Assign the value of the selected radio button
for (const tipPercentage of tipPercentages) {
    tipPercentage.addEventListener('change', () => {
        tipPercent = Number(tipPercentage.value);
        calculate();
    });
}

numberOfPeople.addEventListener('input', () => {
    if (Number(numberOfPeople.value) === 0 && numberOfPeople.value.length != 0) {
        numberOfPeople.classList.add('error');
        numberOfPeople.classList.add('error:focus');
        peopleErrorMessage.textContent = "Can't be zero";
    } else if (Number(numberOfPeople.value) < 0) {
        numberOfPeople.classList.add('error');
        numberOfPeople.classList.add('error:focus');
        peopleErrorMessage.textContent = "Can't be negative";
    } else {
        numberOfPeople.classList.remove('error');
        numberOfPeople.classList.remove('error:focus');
        peopleErrorMessage.textContent = '';
        noOfPeople = Number(numberOfPeople.value);
        calculate();
    }
});

resetButton.addEventListener('click', () => {
    totalPerPerson.textContent = '$0.00';
    tipPerPerson.textContent = '$0.00';
    billAmount.value = '';
    numberOfPeople.value = '';
    customPercentage.value = '';
    billValue = 0;
    noOfPeople = 0;
    tipPercent = 0;

    for (const tipPercentage of tipPercentages) {
        tipPercentage.checked = false;
    }

    resetButton.disabled = true;
});

