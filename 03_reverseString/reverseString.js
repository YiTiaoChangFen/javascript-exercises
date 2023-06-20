const reverseString = function(string) {
    let reverseString = "";
    for (let index = string.length - 1; index >= 0; index--) {
        reverseString = reverseString + string[index];
    }
    return reverseString
};

// Do not edit below this line
module.exports = reverseString;
