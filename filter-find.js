const numbers = [4, 6, 8, 10, 12, 79, 30, 5];
const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 3, color: 'white'}
]

// const bigNumbers = numbers.filter(number => number>20);
// const smallNumbers = numbers.filter(number => number<10);

const expensive = products.filter(p => p.price > 100);
const blacks = products.filter(p => p.color == 'pink');

// console.log(bigNumbers);
// console.log(smallNumbers);
console.log(expensive);
console.log(blacks);

const whiteItem = products.find(p => p.color == 'black');
console.log(whiteItem);