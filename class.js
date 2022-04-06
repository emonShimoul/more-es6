class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
    startSession(){
        console.log(this.name, 'Start a support session!!');
    }
}

const aamir = new Support('Amir', 'New York');
const salman = new Support('Salman', 'Dubai');
const shahrukh = new Support('SRK', 'Dubai');
const akshay = new Support('Akshay', 'Dubai');
console.log(aamir);
console.log(salman);
console.log(shahrukh);
console.log(akshay);

aamir.startSession();
salman.startSession();
shahrukh.startSession();
akshay.startSession();