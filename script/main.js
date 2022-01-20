let point = document.querySelector('#point');
let backSpace = document.querySelector('#backspace');
let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.num');
let clear = document.querySelector('.clear');
let equals = document.querySelector('#equals');
let total = 0;
let numOne = [];
let operator = [];
let container = [];

clear.addEventListener('click', restart);
function restart() {
    numOne = [];
    container = [];
    display.textContent = '';
    total = 0;
    operator = [];
}

function getNumbers(e) {
    if (container.length < 17) {
        container.push(e.target.textContent);
        display.textContent = container.join('');
        numOne.push(e.target.textContent);
    }
}
numbers.forEach((num) => {
    num.addEventListener('click', getNumbers);
});

function givePoint() {
    if (!container.includes('.') && container.length < 17) {
        container.push('.');
        display.textContent = container.join('');
        numOne.push('.');
    }
}
point.addEventListener('click', givePoint);

backSpace.addEventListener('click', eraseLast);
function eraseLast() {
    console.log(numOne, container);
    numOne.pop();
    container.pop();
    display.textContent = container.join('');
    console.log(numOne, container);
}

operators.forEach((op) => {
    op.addEventListener('click', () => {
        operator.push(op.textContent);
        numOne.push('new');
        container = [];
    });
});


function operate() {
    let finalNums = numOne.join('').split('new');
    total = Number(finalNums.shift());
    for (let i = 0; i < finalNums.length; i++) {
        switch (true) {
            case operator[i] === '+':
                total += Number(finalNums[i]);
                break;

            case operator[i] === '-':
                total -= Number(finalNums[i]);
                break;

            case operator[i] === '÷':
                switch (finalNums[i]) {
                    case '':
                        total = total
                        break;

                    default:
                        total /= Number(finalNums[i]);
                }
                break;

            case operator[i] === '×':
                switch (finalNums[i]) {
                    case '':
                        total = total
                        break;

                    default:
                        total *= Number(finalNums[i]);
                }
                break;
        }
    }
    showTotal();
    console.log(total, operator, numOne);
}

function showTotal() {
    if (total === Infinity) {
        display.textContent = 'ERROR';
    }
    else if (Number(total) === total && total % 1 !== 0) {
        display.textContent = total.toFixed(2);
    }
    else {
        display.textContent = total;
    }
}

equals.addEventListener('click', operate);



// keyboard support
document.addEventListener('keydown', (e) => {
    let numArr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let signArr = ['+', '-',];
    switch (true) {
        case numArr.includes(e.key) && container.length < 17:
            container.push(e.key);
            numOne.push(e.key);
            display.textContent = container.join('');
            break;

        case signArr.includes(e.key):
            operator.push(e.key);
            container = [];
            numOne.push('new');
            break;

        case e.key === '/':
            operator.push('÷');
            container = [];
            numOne.push('new');
            break;

        case e.key === '*':
            operator.push('×');
            container = [];
            numOne.push('new');
            break;

        case e.key === '=':
            operate();
            break;

        case e.key === 'Backspace':
            eraseLast()
            break;

        case e.key === '.':
            givePoint()
            break;

        case e.key === 'Escape':
            restart()
            break;
    }
});

let currentYear = new Date().getFullYear();
document.querySelector('span').textContent = currentYear;












