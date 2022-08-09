/*(temp) method er maddome amra kono value ke joma rakte pari,
 and oi value ta pore set korte pari*/

let first = 8;
let second = 5;
const temp = first;
first = second;
second = temp;

console.log(first, second);