let letterOnly = function (str) {
    return str.toLowerCase().replace(/[^\w]|_/g, "");
}

const palindromes = function (str) {
    let puncless = letterOnly(str);
    let lastLetter = puncless.length - 1;
    
    for (let index = 0; index < puncless.length / 2; index++) {
        if (puncless[index] == puncless[lastLetter]) {
            //console.log(`true for ${index} and ${lastLetter}`)
            --lastLetter;
            continue;
        } else {
            //console.log(`false for ${index} and ${lastLetter}`)
            return false;
        }
        
    }
    return true;
};



// Do not edit below this line
module.exports = palindromes;
