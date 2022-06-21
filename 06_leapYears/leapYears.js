const leapYears = function() {
    if(arguments[0]%4 == 0 && arguments[0]%100 !=0)  //Leap Year if divisible by 4 but not by 100
        return true;
    else if(arguments[0]%400 == 0) //Leap Year if divisible by 400
        return true;
    
    return false; //Else it's not a leap year
};

// Do not edit below this line
module.exports = leapYears;
