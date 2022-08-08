const palindromes = function (input) {
    let tempString = '', tempInput = '';
    for (let i = 0; i < input.length; i++) {
        if (input.toLowerCase().charCodeAt(i) > 97 && input.toLowerCase().charCodeAt(i) < (97 + 26)) {
            tempInput += input.toLowerCase().charCodeAt(i);
            tempString = input.toLowerCase().charCodeAt(i) + tempString;
        }
    }
    if (tempInput == tempString)
        return true;
    return false;
};

// Do not edit below this line
module.exports = palindromes;
