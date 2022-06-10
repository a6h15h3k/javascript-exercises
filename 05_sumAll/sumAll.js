const sumAll = function(first, second) {
    //Return Error if arguments are not Positive Integers or a different Datatype
    if(typeof(first) != "number" || typeof(second) != "number" || first < 0 || second < 0)
        return "ERROR";
    
    //Decide the starting and ending point
    let start = first, finish = second, result = 0;
    if(second < first)  {
            start = second;
            finish = first;
    }

    //Add all of the list
    for(;start <= finish; start++)   {
        result += start;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
