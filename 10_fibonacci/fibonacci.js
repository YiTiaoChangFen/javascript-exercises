const fibonacci = function(fibNum) {
    let firstFib = 1;
    let secondFib = 1;
    let result = firstFib;

    if (fibNum == 1 || fibNum == 2) {
        return firstFib;
    } else if (fibNum < 0) {
        return "OOPS"
    }

    for (let index = 0; index < fibNum - 2; index++) {
        result = firstFib + secondFib;
        secondFib = firstFib;
        firstFib = result;
    }
    return result;

};

// Do not edit below this line
module.exports = fibonacci;
