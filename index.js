let upper = document.getElementById("upperBox");
let lower = document.getElementById("lowerBox");

function pressNum(e) {

    if (lower.innerHTML === '0') {
        lower.innerHTML = e.innerHTML;
    } else {
        lower.innerHTML += e.innerHTML;
    }
}

function pressOperator(e) {
    let lastOperator = lower.innerHTML.slice(-1);
    if (lastOperator.includes('+', '-', 'x', '+')) {
        calculations.innerHTML = lower.innerHTML.slice(0, -1) + e.innerHTML;
    } else {
        lower.innerHTML += e.innerHTML;
    }
}

function pressAllClear() {
    upper.innerHTML = '';
    lower.innerHTML = '0';
}

function pressClear() {
    lower.innerHTML = lower.innerHTML.slice(0, -1);
}

function pressDot() {
    lower.innerHTML += '.';
}

function pressEqual() {
    let exp = lower.innerHTML;
    upper.innerHTML = exp;

    exp = exp.replace(/x/g, '*');
    let result;

    try {
        result = eval(exp);

        if (result.toString().indexOf('.') !== -1) {
            result = result.toFixed(4);
        }
    } catch (e) {
        result = 'Error';
    }
    lower.innerHTML = result;
}

document.addEventListener('keydown', function (e) {
    switch (e.key) {
        case '0':
            pressNum(document.querySelector('button:nth-child(17)'));
            break;
        case '00':
            pressNum(document.querySelector('button:nth-child(2)'));
            break;
        case '1':
            pressNum(document.querySelector('button:nth-child(13)'));
            break;
        case '2':
            pressNum(document.querySelector('button:nth-child(14)'));
            break;
        case '3':
            pressNum(document.querySelector('button:nth-child(15)'));
            break;
        case '4':
            pressNum(document.querySelector('button:nth-child(9)'));
            break;
        case '5':
            pressNum(document.querySelector('button:nth-child(10)'));
            break;
        case '6':
            pressNum(document.querySelector('button:nth-child(11)'));
            break;
        case '7':
            pressNum(document.querySelector('button:nth-child(5)'));
            break;   
        case '8':
            pressNum(document.querySelector('button:nth-child(6)'));
            break;
        case '9':
            pressNum(document.querySelector('button:nth-child(7)'));
            break;
        case '+':
            pressOperator(document.querySelector('button:nth-child(16)'));
            break;
        case '-':
            pressOperator(document.querySelector('button:nth-child(12)'));
            break;
        case '*':
            pressOperator(document.querySelector('button:nth-child(8)'));
            break;
        case '/':
            pressOperator(document.querySelector('button:nth-child(4)'));
            break;
        case '.':
            pressDot();
            break;
        case 'Enter':
            e.preventDefault();
            pressEqual();
            break;
        case 'Backspace':
            pressClear();
            break;
        case 'Escape':
            pressAllClear();
            break;

    }       
});




