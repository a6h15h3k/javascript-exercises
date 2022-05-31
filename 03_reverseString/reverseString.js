const reverseString = function(str) {
    let result = '';
    if(str == '')
        return '';

    for(let i = str.length-1; i >= 0; i--)   {
        result += str.charAt(i);
    }

    return result;
};

// Do not edit below this line
module.exports = reverseString;
