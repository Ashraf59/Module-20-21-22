function getSumOfArray(numbers){

    let sum = 0;
    for(let i = 0; i < numbers.length; i++ ){
        const index = i;
        const elements = numbers[index];
        sum = sum + elements;
        console.log(index, elements, sum);
    }
    
    return sum;
}

function getOddNumbers(numbers){
    const oddNumbers = [];
for(let i = 0; i < numbers.length; i++){
    const index = i;
    const elements = numbers[index];
    if (elements % 2 !== 0){

        console.log(index, elements);
        oddNumbers.push(elements);
    }
}
return oddNumbers;
}

const myNumbers = [20, 52, 36, 45, 65, 85];
getSumOfArray(myNumbers);
const oddNumbers = getOddNumbers(myNumbers);
console.log(oddNumbers);
