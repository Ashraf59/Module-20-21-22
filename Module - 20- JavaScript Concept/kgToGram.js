function kgToGram(kg){
    const kiloGram = kg * 1000;
    return kiloGram;
}

const myWightKg = 60;
const myWightGm = kgToGram(myWightKg);
console.log(myWightGm);
