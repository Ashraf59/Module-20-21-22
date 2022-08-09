/* Problem solving requirements
...............................
1. Show output from: 1 to 50
2. If the number is divisible by 3 then instead of the number show 'foo'.
3. If the number is divisible by 5 then instead of the number show 'bar'.
4. If the number is divisible by both 3 & 5 then instead of the number show 'foobar'.
*/

/*....................................................
Answer of the problem - 1: Show output from: 1 to 50
.....................................................*/
for(let i = 1; i <=50; i++){
    // console.log(i);
}

/*.........................................................................................
Answer of the problem - 2: If the number is divisible by 3 then instead of the number show 'foo'
...........................................................................................*/
for(let i = 1; i <= 50; i++){
    if(i % 3 === 0){
        // console.log('foo');
    }
    else{
        // console.log(i);
    }
}

/*.........................................................................................
Answer of the problem - 3: If the number is divisible by 5 then instead of the number show 'bar'
...........................................................................................*/

for(let i = 5; i <= 50; i++){
    if(i % 5 === 0){
        // console.log('bar');
    }
    else{
        // console.log(i);
    }
}

/*.........................................................................................
Answer of the problem - 4: If the number is divisible by both 3 & 5 (number should be 1 to 50) then instead of the number show 'foobar'
...........................................................................................*/

for(let i = 1; i <= 50; i++){
    if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
    else if(i % 5 === 0){
        console.log('bar');
    }
    else if(i % 3 === 0){
        console.log('foo');
    }
    else {
        console.log(i);
    }
}