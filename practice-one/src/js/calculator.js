/**
 * @param {object} BasicCalculator - Contains the method options used in the basic calculator
*/
class BasicCalculator {
    constructor (bigSizeNumber, smallSizeNumber) {
        this.bigSizeNumber = bigSizeNumber;
        this.smallSizeNumber = smallSizeNumber;
        this.clearAll()
    }

    /**
     * @param {object} BasicCalculator.clearAll - Clear display screen and operation input method
    */
    clearAll() {
        this.firstOperand = '';
        this.secondOperand = ''; 
        this.operation = '';    
    }

    /**
     * @param {object} BasicCalculator.getBack - Return, remove the rightmost element method
    */
    getBack() {
        this.firstOperand = this.firstOperand.toString().slice(0, -1); 
    }

    /**
     * @param {object} BasicCalculator.inputValue - Input value method
     * @param {String} value - value input form users
    */
    inputValue(value) {
        // Check input for decimal point and negative sign
        if (value === '.' && this.firstOperand.includes('.') ||
            value === '-' && this.firstOperand.includes('-') ||
            value === '-' && this.firstOperand !== '' )
        return 
        this.firstOperand = this.firstOperand.toString() + value.toString();
    }

    /**
     * @param {object} BasicCalculator.chooseOperation - Operator selection method
     * @param {String} operation - operation input form users
    */
    chooseOperation(operation) {
        if ( this.firstOperand === '' ) 
        return
        if (this.secondOperand !== '') {
            this.compute();
        }
        this.operation = operation;
        this.secondOperand = this.firstOperand;
        this.firstOperand = '';
    }

    /**
     * @param {object} BasicCalculator.compute - Do the calculation method
    */
    compute() {
        let computation;
        const secondDisplay = parseFloat(this.secondOperand);
        const firstDisplay = parseFloat(this.firstOperand);
        if (isNaN(firstDisplay) || isNaN(secondDisplay)) return
        switch(this.operation) {
            case '+':
                computation = secondDisplay + firstDisplay;
                break
            case '-':
                computation = secondDisplay - firstDisplay;
                break
            case '*':
                computation = secondDisplay * firstDisplay;
                break
            case '/':
                computation = secondDisplay / firstDisplay;
                break
            default: 
                return
        }
        this.operation = undefined;
        this.firstOperand = computation;
        this.secondOperand = ''
    }
}

module.exports = BasicCalculator ;