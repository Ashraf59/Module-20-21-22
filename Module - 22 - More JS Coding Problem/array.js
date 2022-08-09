const country = 'Bangladesh';
const age = 52;
const isIndependent = true;
const students = {id: 125, class: 11, name: 'Kuddos'};
const friends = [20, 23, 52, 45, 23, 55];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof students);
console.log(typeof add);

// We can check array by this following way
console.log(Array.isArray(friends));

//We can check is exist or not in the array by the following way
console.log(friends.includes(23));

//Concatination (For adding one array with another array)

const newFriendAge = [25, 45, 63, 75, 23];
const allFriends = newFriendAge.concat(friends);
console.log(allFriends);



