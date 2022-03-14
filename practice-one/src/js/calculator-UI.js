import BasicCalculator from "./calculator";
import staticInputValues from "./constants";
/**
   * IIFE function use for querying elements, onclick events and onkeypress events
*/
(function () {
    //Querying to the button element
    const numberButtons = document.querySelectorAll('.number');
    const operationButtons = document.querySelectorAll('.operation');
    const equalButtons = document.getElementById('equal');
    const returnButtons = document.getElementById('get-back');
    const clearAllButtons = document.getElementById('clear-all');

    //Querying two display element
    const bigSizeNumber = document.querySelector('.big');
    const smallSizeNumber = document.querySelector('.small');

    // Create new BasicCalculator object
    const basicCalculator = new BasicCalculator(bigSizeNumber, smallSizeNumber)

    // Update two display method
    const updateDisplay = () => {
        basicCalculator.bigSizeNumber.innerText = basicCalculator.firstOperand;
        if (basicCalculator.operation != null) {
            basicCalculator.smallSizeNumber.innerText =
            `${basicCalculator.secondOperand} ${basicCalculator.operation}`
        } else {
            basicCalculator.smallSizeNumber.innerText = '';
        }
    }

    /**
     * Implement onclick event on buttons
    */
    // Implement onclick event on buttons for input value
    numberButtons.forEach(button => {
        button.addEventListener('click', () => {
            basicCalculator.inputValue(button.innerText);
            updateDisplay();
        })
    })

    // Implement onclick event on buttons for choose operation
    operationButtons.forEach(button => {
        button.addEventListener('click', () => {
            basicCalculator.chooseOperation(button.innerText);
            updateDisplay();
        })
    })

    // Implement onclick event on clearAll buttons for clear all input
    clearAllButtons.addEventListener('click', () => {
        basicCalculator.clearAll();
        updateDisplay();
    })

    // Implement onclick event on getBack buttons for return input
    returnButtons.addEventListener('click', () => {
        basicCalculator.getBack();
        updateDisplay();
    })

    // Implement onclick event for compute
    equalButtons.addEventListener('click', () => {
        basicCalculator.compute();
        updateDisplay();
    })

    /**
     * Implement onkeypress event on keyboard
    */

    // Implement onkeypress event convert to '.' when user input ',' from keyboard for decimal number
    document.addEventListener('keypress', (event) => {
        const checkValue = String.fromCharCode(event.keyCode);
        if (checkValue === ',')
        basicCalculator.inputValue('.')
    })

    // Implement onkeypress event on desktop keyboard
    document.addEventListener('keypress', (e) => {
        const keyPress = String.fromCharCode(e.keyCode);
        // Check condition only integers and special character are allowed
        if(staticInputValues.includes(keyPress)) {
            basicCalculator.inputValue(keyPress);
        }
        // Check the activation condition of the clear all button
        if (keyPress === 'C') {
            basicCalculator.clearAll();
        }
        // Check the activation condition of the return button
        if (keyPress === 'B') {
            basicCalculator.getBack();
        }
        // Check the activation condition of the choose operation
        if (keyPress === '+' || keyPress === '-'|| keyPress === '*'||  keyPress === '/') {
            basicCalculator.chooseOperation(keyPress);
        }
        // Check the activation condition of the compute
        if (keyPress === '=') {
            basicCalculator.compute();
        }
        updateDisplay();
    })
})();