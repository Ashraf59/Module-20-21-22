function isEven(number){
    const reminder = number % 2;
    if (reminder === 0){
        return true;
    }
    else{
        return false;
    }
}

const evenNum = 50;
const even = isEven(evenNum);

const oddNum = 123;
const odd = isEven(oddNum);
console.log(odd);