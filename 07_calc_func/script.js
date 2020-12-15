const fieldCalc = document.querySelector('#inputWindow'),
      fieldHistory = document.querySelector('#history_operation'),
      clearButton = document.querySelector('#btn_clr'),
      backSpaceButton = document.querySelector('#btn_backspace'),
      secondRootButton = document.querySelector('#btn_square'),
      squareButton = document.querySelector('#btn_squaring'),
      plusMinusButton = document.querySelector('#btn_sign_change'),
      additionButton = document.querySelector('#btn_sum'),
      differenceButton = document.querySelector('#btn_def'),
      multiplButton = document.querySelector('#btn_multiply'),
      divisionButton = document.querySelector('#btn_division'),
      resultButton = document.querySelector('#btn_calc'),
      dottedButton = document.querySelector('#btn_dot'),
      numberButton = document.querySelectorAll('.number-calc'), 
      lastAction = document.querySelector('#last_action');


fieldCalc.value = 0;

let dataCalc = {
    'number': 0,
    'action': '', 
    'actionResult': false
};

numberButton.forEach(elem => { // Подвесили событие на каждую кнопку с цифрой
    elem.addEventListener('click', function(e) {
        let num = e.target.getAttribute("id");
        if(fieldCalc.value == '0' || dataCalc.actionResult && (fieldCalc.value.indexOf('.') == '-1' || fieldCalc.value.indexOf('-') == '-1')) {
            dataCalc.actionResult = false;
            fieldCalc.value = num;
        } else {
            fieldCalc.value += num;
        }
    });
});

clearButton.addEventListener('click', function() { // Очистка поля ввода
    fieldCalc.value = 0;
    lastAction.innerHTML = '';
});

additionButton.addEventListener('click', function() { // Действие сложение
    if(dataCalc.number != 0 && fieldCalc.value != '') {
        contextAction(dataCalc.action);
    } else {
        dataCalc.number = fieldCalc.value;
    }
    dataCalc.action = 'addition';
    addLastAction(fieldCalc.value);
    addLastAction(' + ');
    clearField();
});

function contextAction(action) {
    console.log('contextAction', action);
    switch(dataCalc.action) {
        case 'addition':
            dataCalc.number = +dataCalc.number + + fieldCalc.value;
            break;
        case 'difference':
            dataCalc.number = +dataCalc.number - + fieldCalc.value;
            break;
        case 'multiply':
            dataCalc.number = +dataCalc.number * + fieldCalc.value;
            break;
        case 'divide':
            dataCalc.number = +dataCalc.number / + fieldCalc.value;
            break;
    }
}

differenceButton.addEventListener('click', function() { // Действие сложение
    if(dataCalc.number != 0 && fieldCalc.value != '') {
        contextAction(dataCalc.action);
    } else {
        dataCalc.number = fieldCalc.value;
    }
    dataCalc.action = 'difference';
    addLastAction(fieldCalc.value);
    addLastAction(' - ');
    clearField();
});

multiplButton.addEventListener('click', function() { // Действие сложение
    if(dataCalc.number != 0 && fieldCalc.value != '') {
        contextAction(dataCalc.action);
    } else {
        dataCalc.number = fieldCalc.value;
    }
    dataCalc.action = 'multiply';
    addLastAction(fieldCalc.value);
    addLastAction(' * ');
    clearField();
});

divisionButton.addEventListener('click', function() { // Действие сложение
    if(dataCalc.number != 0 && fieldCalc.value != '') {
        contextAction(dataCalc.action);
    } else {
        dataCalc.number = fieldCalc.value;
    }
    dataCalc.action = 'divide';
    addLastAction(fieldCalc.value);
    addLastAction(' / ');
    clearField();
});

secondRootButton.addEventListener('click', function() {
    if(fieldCalc.value != 0) {
        addLastAction(`квадратный корень из ${fieldCalc.value}`);
        fieldCalc.value = Math.sqrt(fieldCalc.value);
        addActionHistory(fieldCalc.value);
    }
});

squareButton.addEventListener('click', function() {
    if(fieldCalc.value != 0) {
        addLastAction(`${fieldCalc.value} в квадрате`);
        fieldCalc.value = Math.pow(fieldCalc.value, 2);
        addActionHistory(fieldCalc.value);
    }
});

resultButton.addEventListener('click', resultAction);

function resultAction(context = false) {
    switch(dataCalc.action) {
        case 'addition':
            addLastAction(fieldCalc.value);
            fieldCalc.value = chekFloat(+dataCalc.number + +fieldCalc.value); 
            dataCalc.action = '';
            dataCalc.actionResult = true;
            addActionHistory(fieldCalc.value);
            break;
        case 'difference':
            addLastAction(fieldCalc.value);
            fieldCalc.value = chekFloat(+dataCalc.number - +fieldCalc.value); 
            dataCalc.action = '';
            dataCalc.actionResult = true;
            addActionHistory(fieldCalc.value);
            break;
        case 'multiply':
            addLastAction(fieldCalc.value);
            fieldCalc.value = chekFloat(+dataCalc.number * +fieldCalc.value); 
            dataCalc.action = '';
            dataCalc.actionResult = true;
            addActionHistory(fieldCalc.value);
            break;
        case 'divide':
            addLastAction(fieldCalc.value);
            fieldCalc.value = chekFloat(+dataCalc.number / +fieldCalc.value); 
            dataCalc.action = '';
            dataCalc.actionResult = true;
            addActionHistory(fieldCalc.value);
            break;
    }
    dataCalc.number = 0;
}

dottedButton.addEventListener('click', addDotted);

plusMinusButton.addEventListener('click', addPlusMinus);

backSpaceButton.addEventListener('click', backSpace);

function addDotted() {
    if(fieldCalc.value.indexOf('.') == -1) {
        fieldCalc.value += '.'; 
    } 
}

function addPlusMinus() {
    if(fieldCalc.value.indexOf('-') == -1) {
        fieldCalc.value = `-${fieldCalc.value}`;
    } else {
        fieldCalc.value = fieldCalc.value.substr(1);
    }
};

function backSpace() {
    fieldCalc.value = fieldCalc.value.slice(0, fieldCalc.value.length - 1);
};

function clearField() {
    fieldCalc.value = '';
};

function addLastAction(action) {
    lastAction.value += action;
}

function addActionHistory(result) {
    let elem = `<p>${lastAction.value} = ${result}</p>`;
    fieldHistory.insertAdjacentHTML('afterbegin', elem);
    lastAction.value = '';
}

function chekFloat(result) {
    if(String(result).indexOf('.') == -1) {
        return result;
    } else {
        return result.toFixed(2);
    }
}