const display = document.getElementById("calcDisplay");

function showResults(key) {
    if (key === "=") {
        let expression = display.value;
        let result = evaluateExpression(expression);
        display.value = result;
    } else {
        display.value += key;
    }
}

function clearButton() {
    display.value = "";
}

function evaluateExpression(expression) {
    try {
        return Function('return ' + expression)();
    } catch (error) {
        return 'Error';
    }
}
