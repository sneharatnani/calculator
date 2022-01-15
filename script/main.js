
let display = document.querySelector('.display');
let numKey = document.querySelectorAll('.num');
let clear = document.querySelector('.clear');
let total;

clear.addEventListener('click', restart);
function restart() {
    container = '';
    display.textContent = '';
    total = 0;
}


let container = '';
numKey.forEach((key) => {
    key.addEventListener('click', () => {
        container += key.textContent;
        display.textContent = container;

        operate();
    });
});

function operate() {
    let operators = document.querySelectorAll('.operator');
    operators.forEach((operator) => {
        operator.addEventListener('click', calc);
    });
}

function calc(e) {
    switch (e.target.id) {
        /*     case 'addition':
                total += (+container);
                console.log(total, container);
                clearDisplay();
                break; */

        /*    case 'subtract':
               subtract();
               console.log(total, container);
               clearDisplay();
               break; */

        /*    case 'multiply':
               multiply();
               console.log(total, container);
               clearDisplay();
               break; */

        case 'division':
            division();
            console.log(total, container);
            clearDisplay();
            break;
    }
}

function clearDisplay() {
    container = '';
    // display.textContent = total;
}

function subtract() {
    if (!total) {
        total = (+container) - total;
    }

    else if (total === undefined) {
        total = (+container);
    }

    else {
        total -= (+container);
    };
}

function multiply() {
    if (total === undefined) {
        total = (+container);
    }
    else {
        total *= (+container);
    }
}

function division() {
    if (total === undefined) {
        total = (+container);
    }
    else {
        total = +(total / (+container)).toFixed(2);
        console.log(typeof total);
    }
}






