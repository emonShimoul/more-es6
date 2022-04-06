const fish = {id: 58, name: 'King Hilsha', price: 9000, phone: '01922837363', address: 'Chandpur', dress: 'Silver'};

const {phone, address, name, id, price} = fish;

// console.log(phone);
// console.log(address);
// console.log(price);
// console.log(id);
// console.log(name);

const company = {
    name: 'GP',
    ceo: {id: 1, name: 'Emon', food: 'Biriyani'},
    web: {work: 'Web Development', employee: 22, framework: 'React'}
};

const work = company.web.work;
const framework = company.web.framework;

// const {framework, work} = company.web;
// const {food} = company.ceo;
console.log(company.web?.work);
console.log(company.web.framework);