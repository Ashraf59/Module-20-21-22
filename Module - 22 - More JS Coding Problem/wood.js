/*...........................................
Fixed: Per item wood requirements:
..................................
1. Chair: 3 cft
2. Table - 10 cft
3. Bed - 50 cft

# Variable: Quantity   
..................... */

function woodCalculator(chairQuantity, tableQuantity, bedQuantity){
    const perChairWoodQuantity = 3;
    const perTableWoodQuantity = 10;
    const perBedWoodQuantity = 50;

    const chairWood = chairQuantity * perChairWoodQuantity;
    const tableWood = tableQuantity * perTableWoodQuantity;
    const bedWood = bedQuantity * perBedWoodQuantity;

    const totalWood = chairWood + tableWood + bedWood;

    return totalWood;
}

const total = woodCalculator(1, 1, 1);
console.log(total);