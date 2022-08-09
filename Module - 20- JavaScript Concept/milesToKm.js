function milesToKm (miles){
    const kilometer = miles * 1.609;
    return kilometer;
}

const myOfficeMile = 10;
const myOfficeKm = milesToKm(myOfficeMile);
console.log(myOfficeKm);
