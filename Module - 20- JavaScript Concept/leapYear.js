function isLeapYera (year){
    const reminder = year % 4;
    if (reminder === 0){
        return true;
    }
    else{
        return false;
    }
}


const isMyyear = isLeapYera(1960);

const isNotMyLeapYear = isLeapYera(1950);
console.log(isNotMyLeapYear);