//Inches to Feet

const myInches = 70;
const myFeet = myInches/12;
console.log(myFeet);

//Inches to Feet by function

function inchToFeet(inch){
    const feet = inch/12;
    return feet;
}

const dadaInch = 100;
const dadaFeet = inchToFeet(dadaInch); 
console.log(dadaFeet);

const dadiInch = 120;
const dadiFeet = inchToFeet(dadiInch);
console.log(dadiFeet);