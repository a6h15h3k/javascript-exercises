const fibonacci = function (input) {
    if (input < 0)
        return "OOPS";

    let currentNum = 1, prevNum = 0, temp;
    for (let i = 1; i < parseInt(input); i++) {
        temp = currentNum;
        currentNum += prevNum;
        prevNum = temp;
    }
    return currentNum;
};

// Do not edit below this line
module.exports = fibonacci;
