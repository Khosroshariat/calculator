let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('input').value =displayValue;
}

function clearScreen() {
    displayValue = '';
    document.getElementById('input').value = displayValue;
}

function calculate() {
        displayValue = eval(displayValue)
        document.getElementById('input').value = displayValue
}

function deleteLast() {
    displayValue = displayValue.slice(0, -1)
    document.getElementById('input').value = displayValue;
}

