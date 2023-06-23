const sumAll = function(numOne, numTwo) {
    let result = 0;
    let firstDigit = numOne;
    let lastDigit= numTwo;
    let firstDigitType = typeof numOne;
    let lastDigitType = typeof numTwo;

    // error handling
    if (numOne < 0 || numTwo < 0) {
        return "ERROR";
    } else if (firstDigitType != 'number' || lastDigitType != 'number') {
        return "ERROR";
    }

    if (numOne > numTwo) {
        firstDigit = numTwo;
        lastDigit = numOne;
    }

    for (let index = firstDigit; index <= lastDigit; index++) {
        result = result + index;
    }

    return result;

};

// Do not edit below this line
module.exports = sumAll;
