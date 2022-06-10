const removeFromArray = function(initial, remove) {
    for(let i = 1; i < arguments.length; i++)   {
        if(initial.includes(arguments[i]) && initial[initial.indexOf(arguments[i])] === arguments[i])
            initial.splice(initial.indexOf(arguments[i]), 1);
    }
    return initial;
};

// Do not edit below this line
module.exports = removeFromArray;
