function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return +(num1 / num2).toFixed(2);
}

let display = document.querySelector('.display');
let numKey = document.querySelectorAll('.num');
let clear = document.querySelector('.clear');

clear.addEventListener('click', clearDisplay);
function clearDisplay() {
    container = '';
    display.textContent = '';
}
let total = 0;
let container = '';
numKey.forEach((key) => {
    key.addEventListener('click', () => {
        container += +key.textContent;
        display.textContent = container;
    });
});








