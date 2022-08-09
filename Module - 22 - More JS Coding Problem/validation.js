
/*Validation: If any users do not put number, we can give them a message for putting number, otherwise it will show a notification for submiting number */


/*Sum
.....*/

function add(num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';
    }
    return num1 + num2;
}

const result = add(200, 50);
console.log(result);

/*Multiplication
.................*/

function multiplication (num1, num2){
    if(typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'Please enter a number';}

    return num1 * num2;
}

const output = multiplication(30, 40);
console.log(output);