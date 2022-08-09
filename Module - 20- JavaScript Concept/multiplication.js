function multiplicationOfNum(number){
    let answer = 1;
    for(let i = 1; i <=7; i++){
        answer = answer * i;
    }
    return answer;
}
const answer = multiplicationOfNum(7);
console.log(answer);