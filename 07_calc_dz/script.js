let lastOperand = '',
    operation = null,
    history = document.querySelector('#history_operation'), 
    expressionHistory = '';

const inputWindow = document.querySelector('#inputWindow');
inputWindow.value = 0;

document.querySelector('#btn_1').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '1';
});
document.querySelector('#btn_2').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '2';
});
document.querySelector('#btn_3').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '3';
});
document.querySelector('#btn_4').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '4';
});
document.querySelector('#btn_5').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '5';
});
document.querySelector('#btn_6').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '6';
});
document.querySelector('#btn_7').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '7';
});
document.querySelector('#btn_8').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '8';
});
document.querySelector('#btn_9').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '9';
});
document.querySelector('#btn_0').addEventListener('click', function () {
    if(inputWindow.value == 0 && inputWindow.value.indexOf('.') == -1) {
        inputWindow.value = '';
    }
    inputWindow.value += '0';
});

document.querySelector('#btn_sum').addEventListener('click', function () {
    lastOperand = +inputWindow.value;
    console.log(lastOperand);
    operation = 'sum';
    expressionHistory += `${inputWindow.value} + `;
    inputWindow.value = '';
});

document.querySelector('#btn_def').addEventListener('click', function () {
        lastOperand = +inputWindow.value;
        operation = 'def';
        expressionHistory += `${inputWindow.value} - `;
        inputWindow.value = '';
});

document.querySelector('#btn_multiply').addEventListener('click', function () {
    lastOperand = +inputWindow.value;
    operation = 'multiply';
    expressionHistory += `${inputWindow.value} * `;
    inputWindow.value = '';
});

document.querySelector('#btn_division').addEventListener('click', function () {
    lastOperand = +inputWindow.value;
    operation = 'division';
    expressionHistory += `${inputWindow.value} / `;
    inputWindow.value = '';
});

document.querySelector('#btn_square').addEventListener('click', function () {
    lastOperand = +inputWindow.value;
    const result = Math.sqrt(lastOperand);
    operation = null;
    inputWindow.value = result;
    expressionHistory = `квадр. корень из ${lastOperand} = ${result}`;
    history.insertAdjacentHTML('afterbegin', `<p>${expressionHistory}</p>`);
    expressionHistory = '';
    lastOperand = '';
});

document.querySelector('#btn_squaring').addEventListener('click', function () {
    lastOperand = +inputWindow.value;
    const result = Math.pow(lastOperand, 2);
    operation = null;
    inputWindow.value = result;
    expressionHistory = `${lastOperand} в квадрате = ${result}`;
    history.insertAdjacentHTML('afterbegin', `<p>${expressionHistory}</p>`);
    expressionHistory = '';
    lastOperand = '';
});

document.querySelector('#btn_dot').addEventListener('click', function() {
    if(inputWindow.value.indexOf('.') == -1) {
        inputWindow.value += '.';
    }
});

document.querySelector('#btn_sign_change').addEventListener('click', function() {
    if(String(inputWindow.value).indexOf('-') == '-1') {
        inputWindow.value = `-${inputWindow.value}`;
    } else {
        inputWindow.value = inputWindow.value.slice(1);
    }
});

document.querySelector('#btn_calc').addEventListener('click', function () {
    if (operation === 'sum') {
        const result = (lastOperand) + (+inputWindow.value);
        operation = null;
        lastOperand = '';
            if(String(result).indexOf('.') != '-1') {
                expressionHistory += `${inputWindow.value} = ${result.toFixed(2)}`;
                inputWindow.value = result.toFixed(2);
            } else {
                expressionHistory += `${inputWindow.value} = ${result}`;
                inputWindow.value = result;
            }
    } else if (operation === 'def') {
        const result = lastOperand - (+inputWindow.value);
        operation = null;
        lastOperand = '';
            if(String(result).indexOf('.') != '-1') {
                expressionHistory += `${inputWindow.value} = ${result.toFixed(2)}`;
                inputWindow.value = result.toFixed(2);
            } else {
                expressionHistory += `${inputWindow.value} = ${result}`;
                inputWindow.value = result;
            }
    } else if (operation === 'multiply') {
        const result = lastOperand * (+inputWindow.value);
        operation = null;
        lastOperand = '';
            if(String(result).indexOf('.') != '-1') {
                expressionHistory += `${inputWindow.value} = ${result.toFixed(2)}`;
                inputWindow.value = result.toFixed(2);
            } else {
                expressionHistory += `${inputWindow.value} = ${result}`;
                inputWindow.value = result;
            }
    } else if (operation === 'division') {
        const result = lastOperand / (+inputWindow.value);
        operation = null;
        lastOperand = '';
            if(String(result).indexOf('.') != '-1') {
                expressionHistory += `${inputWindow.value} = ${result.toFixed(2)}`;
                inputWindow.value = result.toFixed(2);
            } else {
                expressionHistory += `${inputWindow.value} = ${result}`;
                inputWindow.value = result;
            }
    }
    history.insertAdjacentHTML('afterbegin', `<p>${expressionHistory}</p>`);
    expressionHistory = '';
});

document.querySelector('#btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = 0;
})
