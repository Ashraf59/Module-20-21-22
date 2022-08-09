const phones = [
    {name: 'Samsung', price: 30000, storage: '32gb', color:'Silver'},
    {name: 'Xaomi', price: 20000, storage: '20gb', color:'Black'},
    {name: 'Oppo', price: 25000, storage: '23gb', color:'Blue'},
    {name: 'Nokia', price: 28000, storage: '30gb', color:'Red'},
    {name: 'iPhone', price: 120000, storage: '50gb', color:'Black'},
    {name: 'HTC', price: 45000, storage: '35gb', color:'Silver'},
    {name: 'Blackbery', price: 45000, storage: '40gb', color:'Yellow'},

]

/*.....................................................................................
We have to find out cheapest phone from above phone list by the following fuction call
........................................................................................*/

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}

const myPhone = cheapestPhone(phones);
console.log(myPhone);