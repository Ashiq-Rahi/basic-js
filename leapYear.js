function checkLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        let result = year + ' is a leap year';
        return result;
    }
    else{
        let result = year + ' is not a leap year';
        return result;
    }
}

let myYear = checkLeapYear(2016);
console.log(myYear)
