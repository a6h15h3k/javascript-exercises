const repeatString = function(str, multiple) {
    if(multiple < 0)
        return 'ERROR';
    
    let answer = '';

    for(let i = 0; i < multiple; i++)   {
        answer += str;
    }

    return answer;
};

// Do not edit below this line
module.exports = repeatString;
