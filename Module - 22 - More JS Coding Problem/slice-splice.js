const friends = [23, 65, 42, 89, 54, 75, 32];

/*slice mane holo ami akta array kichu elements ke kete nibo,
 abar main array er sob elements takbe,
 main array er kono poriborton hobena*/

const partial = friends.slice(0, 10);
// console.log(partial);

/*splice mane holo ami akta array kichu elements ke kete nibo,
 abong main array teke je elements gulo kete felbo,
 oi elements gulo main array te r takbena, abar jei ongsho tuku kete nibo,
  tarpore je je number gulo likbo ogulo sob main array te add hobe.*/

 const cutArray = friends.splice(2, 6, 100, 200, 300, 400, 500);
console.log(cutArray);

console.log(friends);