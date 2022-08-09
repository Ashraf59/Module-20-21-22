const names = ['anik', 'tonik', 'bonik', 'fonik', 'mamun', 'tamim', 'hamim', 'bonik', 'mamun', 'tamim', 'fonik', 'mamun', 'hamim',];

//akta array teke duplicate name bad diye, akta empty string a unique name add korlam

function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i < names.length; i++){
        const nameElements = names[i];
        if(unique.includes(nameElements) === false){
            unique.push(nameElements);
        }
        
    }
    return unique;
}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);


