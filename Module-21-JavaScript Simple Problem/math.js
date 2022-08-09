//(Math.pow) method er maddome amra kono number ke power korbo, jemon 2 x 2 x 2 = 8 

const result = Math.pow(2, 3);
console.log(result);

/*(Math.abs) method er maddome amra value positive hok r negative hok amra positive value er difference ta pabo.
 tai amra boro number teke biyok korci naki choto number teke biyok korci sure na takle Math.abs method use korbo.*/

 const num1 = 35;
 const num2 = 60;

 const gap = Math.abs(num1 - num2);
 console.log(gap); 

 if (gap > 10){
    console.log('You should go');
 }
 else{
    console.log('You should come');
 }

 /*(Math.round) method er maddome amra fraction number ke round korte pari,
  jodi 2.4 hoi round korle hobe 2, abar jodi 2.5 hoi round korle number hobe 3.*/

  const number = 4.7;
  const fullNumber = Math.round(number);
  console.log(fullNumber);

  /* (Math.ceil) method er maddome amra fraction er boro round value ta pabo,
   jemon 4.1 takle 5 pabo*/

  const bigValue = Math.ceil(2.1);
  console.log(bigValue);

  /* (Math.floor) method er maddome amra fraction er choto round value ta pabo,
   jemon 4.8 takle 4 pabo*/

   const lowerValue = Math.floor(4.8);
   console.log(lowerValue);

   /* (Math.random) method er maddome amra round value pabo,
    random method er default value 0 to 1,
     er besi kono value er random man pawar jonno toto diye multiple korte hobe.
     r random value er fraction bad dite caile (Math.round) method use korte hobe.*/

     console.log(Math.random()*5);

     // (Math.random) method diye chokka kelar random number banabo

     for(let i = 0; i < 2; i++){
        const chokkarGuti = Math.round(Math.random()*6);
        console.log(chokkarGuti);
     }