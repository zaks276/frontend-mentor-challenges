//Display elements
const cvcDisplay = document.querySelector('[data-cvc-display]');
const cardNumberDisplay = document.querySelector('[data-card-number-display]');
const cardholderDisplay = document.querySelector('[data-cardholder-display]');
const expMonthDisplay = document.querySelector('[data-exp-month-display]');
const expYearDisplay = document.querySelector('[data-exp-year-display]');

//Form inputs
const form = document.querySelector('[data-form]');
const cardholder = document.querySelector('[data-cardholder]');
const cardNumber = document.querySelector('[data-card-number]');
const expMonth = document.querySelector('[data-exp-month]');
const expYear = document.querySelector('[data-exp-year]');
const cvc = document.querySelector('[data-cvc]');

//Error elements
const cardholderError = document.querySelector('[data-cardholder-error]');
const cardNumberError = document.querySelector('[data-card-number-error]');
const expMonthError = document.querySelector('[data-exp-month-error]');
const expYearError = document.querySelector('[data-exp-year-error]');
const cvcError = document.querySelector('[data-cvc-error]');

//Complete elements
const complete = document.querySelector('[data-complete]');
const continueButton = document.querySelector('[data-continue]');

//Regex
const cardNumberRegex = /[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}/;
const expMonthRegex = /0[1-9]|10|11|12/;
const expYearRegex = /\d\d/;
const cvcRegex = /\d{3}/;

//Update display functions
function displayCardholderInput() {
    cardholderDisplay.textContent = cardholder.value;
}

function displayCardNumberInput() {
    cardNumberDisplay.textContent = cardNumber.value;
}

function displayExpMonthInput() {
    expMonthDisplay.textContent = expMonth.value;
}

function displayExpYearInput() {
    expYearDisplay.textContent = expYear.value;
}

function displayCvc() {
    cvcDisplay.textContent = cvc.value;
}

//Validate function
function validate() {

    //Test input against regex and store result in a variable;
    let cardholderTest;
    let cardNumberTest = cardNumberRegex.test(cardNumber.value);
    let expMonthTest = expMonthRegex.test(expMonth.value);
    let expYearTest = expYearRegex.test(expYear.value);
    let cvcTest = cvcRegex.test(cvc.value);

    //Cardholder show error
    if (cardholder.value === '') {
        cardholderError.textContent = "Can't be blank";
        cardholder.style.borderColor = 'red';
        cardholderTest = false;
    } else {
        cardholderError.textContent = '';
        cardholder.style.borderColor = 'var(--light-grayish-violet)';
        cardholderTest = true;
    }

    //Card number show error
    if (cardNumberTest === false) {
        if (cardNumber.value === '') {
            cardNumberError.textContent = "Can't be blank";
            cardNumber.style.borderColor = 'red';

        } else {
            cardNumberError.textContent = "Wrong format, 16 numbers only";
            cardNumber.style.borderColor = 'red';

        }
    } else {
        cardNumberError.textContent = '';
        cardNumber.style.borderColor = 'var(--light-grayish-violet)';

    }

    //Expiry month show error
    if (expMonthTest === false) {
        if (expMonth.value === '') {
            expMonthError.textContent = "Can't be blank";
            expMonth.style.borderColor = 'red';

        } else {
            expMonthError.textContent = "Wrong format, valid months only";
            expMonth.style.borderColor = 'red';

        }
    } else {
        expMonthError.textContent = '';
        expMonth.style.borderColor = 'var(--light-grayish-violet)';

    }

    //Expiry year show error
    if (expYearTest === false) {
        if (expYear.value === '') {
            expYearError.textContent = "Can't be blank";
            expYear.style.borderColor = 'red';

        } else {
            expYearError.textContent = "Wrong format, valid years only";
            expYear.style.borderColor = 'red';

        }
    } else {
        expYearError.textContent = '';
        expYear.style.borderColor = 'var(--light-grayish-violet)';

    }

    //CVC show error
    if (cvcTest === false) {
        if (cvc.value === '') {
            cvcError.textContent = "Can't be blank";
            cvc.style.borderColor = 'red';

        } else {
            cvcError.textContent = "Wrong format, 3 numbers only";
            cvc.style.borderColor = 'red';
        }
    } else {
        cvcError.textContent = '';
        cvc.style.borderColor = 'var(--light-grayish-violet)';

    }

    //If all tests are true, return true else return false
    return (cardholderTest && cardNumberTest && expMonthTest && expYearTest && cvcTest);
}

//Event Listeners
cardNumber.addEventListener('keydown', (event) => {
    //Event to automatically place a space after for characters
    event.target.value = event.target.value.replace(/(\S{4})(\S+)/g, '$1 $2');
});

form.addEventListener('submit', (event) => {
    //Prevent form from submitting
    event.preventDefault();

    if (validate() === true) {
        form.style.display = 'none';
        complete.style.display = 'flex';
    }
});

continueButton.addEventListener('click', () => {
    form.style.display = 'grid';
    complete.style.display = 'none';

    cardholderDisplay.textContent = 'Jane Appleseed';
    cardNumberDisplay.textContent = '0000 0000 0000 0000';
    expMonthDisplay.textContent = '00';
    expYearDisplay.textContent = '00';
    cvcDisplay.textContent = '000';

    cardNumber.value = '';
    cardholder.value = '';
    expMonth.value = '';
    expYear.value = '';
    cvc.value = '';

    cardNumberError.textContent = '';
    cardholderError.textContent = '';
    expError.textContent = '';
    cvcError.textContent = '';

    cardholder.style.borderColor = 'var(--light-grayish-violet)';
    cardNumber.style.borderColor = 'var(--light-grayish-violet)';
    expMonth.style.borderColor = 'var(--light-grayish-violet)';
    expYear.style.borderColor = 'var(--light-grayish-violet)';
    cvc.style.borderColor = 'var(--light-grayish-violet)';
});
