function whileFactorial (number){
    let num = 1;
    let result = 1; 
    while(num <= number){
        result = result * num;
        num++;
    } 
    return result;
}

const number = 12;
const fact = whileFactorial(number);
console.log('factorial of fact', number, fact);