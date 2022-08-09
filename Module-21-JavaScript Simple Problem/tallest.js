function maxInArray(number){
    let largest = number[0];
    for(let i = 0; i < number.length; i++){
        const indexNum = i;
        const element = number[indexNum];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const height = [140, 160, 190, 220, 170, 60, 90, 320, 440];
const tallest = maxInArray(height);
console.log('tallest person is.', tallest);

/*
Home Work from Programming Hero:
.................................
1. Write a function to get the lowest number from an array.

 */