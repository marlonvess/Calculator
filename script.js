console.log("Calculator script loaded.");


var firstNumber, secondNumber, operation, tempResult, finalResult;

const calcScreen = document.querySelector(".calculator-screen");
const allClear = document.querySelector(".all-clear");
calcScreen.value = "";

function operator() {
const keys = document.querySelector(".calculator-keys");
const operator = document.querySelector(".operator");

keys.addEventListener("click", (event) => {
   
    const target = event.target;
    if (!target.matches("button")) {
        return;
    }
    console.log(`Button ${target.value} clicked.`);
    
    //Show clicked value on screen
    calcScreen.value += target.value;  

    //Clear screen
    if (target.classList.contains("all-clear")) {
        calcScreen.value = "";
        firstNumber = undefined;
        secondNumber = undefined;
        operation = undefined;
        tempResult = undefined;
        finalResult = undefined;
        console.log("Calculator cleared.");
        return;
    }

    //Store first number and operation
    if (target.classList.contains("operator") && target.value !== "=") {
        firstNumber = parseFloat(calcScreen.value.slice(0, -1));
        operation = target.value;
        console.log(`First number: ${firstNumber}, Operation: ${operation}`);
        return;
    }

    //Store second number and calculate result
    if (target.classList.contains("equal-sign")) {
        secondNumber = parseFloat(calcScreen.value.slice(calcScreen.value.indexOf(operation) + 1));
        console.log(`Second number: ${secondNumber}`);
        
        switch (operation) {
            case "+":
                finalResult = firstNumber + secondNumber;
                break;
            case "-":
                finalResult = firstNumber - secondNumber;
                break;
            case "*":
                finalResult = firstNumber * secondNumber;
                break;
            case "/":
                finalResult = firstNumber / secondNumber;
                break;
            default:
                console.log("Unknown operation.");
                return;
        }
        console.log(`Final result: ${finalResult}`);
        calcScreen.value = finalResult;
    }   
});
 
}



operator();