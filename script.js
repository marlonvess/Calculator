const display = document.getElementById("calcDisplay");
 //get numbers from "onclick" on index page and store it in key parameter.
function showResults(key) {
    if (key === "=") {
        let expression = display.value; 
        let result = evaluateExpression(expression); 
        display.value = result; //In case = key be used, it will sum all values inserted with this function
    } else {
        display.value += key; //IF key is different from = it will keep add numbers in display
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
