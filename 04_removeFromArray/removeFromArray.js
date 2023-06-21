const removeFromArray = function(array) {
    for (let index = 0; index < array.length; index++) {
        for (let i = 1; i < arguments.length; i++) {
            if (array[index] === arguments[i]) {
                array.splice(index, 1);
                --index;
            } else {
                continue;
            }
        }
            
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
