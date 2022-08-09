const shoppingCard = [
    {name: 'shoes', price: 500, quantity: 3},
    {name: 'shirt', price: 600, quantity: 5},
    {name: 'pant', price: 1000, quantity: 6},
    {name: 'sunglass', price: 200, quantity: 2}
]

function totalPrice(products){
    let sum = 0;
    for(let i =0; i < products.length; i++){
        const myProduct = products[i]
        const productTotal = myProduct.price * myProduct.quantity;
        sum = sum + productTotal;
    }
    return sum;
}

const expense = totalPrice(shoppingCard);
console.log('My Total Expense', expense);
