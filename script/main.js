let operators = document.querySelectorAll('.operator');
let display = document.querySelector('.display');
let numbers = document.querySelectorAll('.num');
let clear = document.querySelector('.clear');
let equals = document.querySelector('#equals');
let total = 0;
let numOne = [];
// let numTwo = '';
let operator = [];
let container = '';

clear.addEventListener('click', restart);
function restart() {
    numOne = '';
    display.textContent = '';
    total = 0;
}

numbers.forEach((num) => {
    num.addEventListener('click', () => {
        container += num.textContent;
        display.textContent = container;
        numOne.push(num.textContent);
    });
});



operators.forEach((op) => {
    op.addEventListener('click', () => {
        /*  if (e.target.textContent !== '=') {
             operator = e.target.textContent;
         }
         else {
             switch (operator) {
                 case '+':
                     operate();
                     total = '';
                     console.log(numOne, total);
                     break;
             }
         } */
        operator.push(op.textContent);
        numOne.push('new');
        container = '';
    });
});


function operate() {

}

function clearDisplay() {
    display.textContent = '';
    // display.textContent = total;

}

equals.addEventListener('click', () => {
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

    console.log(total, operator, numOne);
});
/* function show() {
    if (total === 'Infinity') {
        display.textContent = 'ERROR';
    }
    else {
        display.textContent = total.toFixed(2);
    }
}
 */













