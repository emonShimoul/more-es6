const friends = ['Tom Hanks', 'Tom Cruise', 'Tom Braddy', 'Tom Solaiman'];

const flength = friends.map(f => f.length);
console.log(flength);

const products = [
    {name: 'water bottle', price: 50, color: 'yellow'},
    {name: 'mobile phone', price: 15000, color: 'black'},
    {name: 'smart watch', price: 3000, color: 'black'},
    {name: 'sticky note', price: 30, color: 'pink'},
    {name: 'water glass', price: 3, color: 'white'}
]

const productNames = products.map(p => p.name);
const productPrices = products.map(p => p.price);
console.log(productNames);
console.log(productPrices);
// products.map(p => console.log(p));
products.forEach(p => console.log(p));