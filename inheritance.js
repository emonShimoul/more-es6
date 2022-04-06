class TeamMember {
    name;
    address = 'BD';
    constructor(name, address){
        this.name = name;
        this.address = address;
    }
}

class Support extends TeamMember {
    groupSupportTime;
    designation = 'Support Web Dev';
    constructor(name, address, time){
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession(){
        console.log(this.name, 'Start a support session!!');
    }
}

class StudentCare extends TeamMember {
    designation = 'Care Web Dev';
    buildARoutine(student){
        console.log(this.name, 'Build a routine for ', student);
    }
}

const aamir = new Support('Amir', 'New York', 11);
const salman = new Support('Salman', 'Dubai', 4);
const shahrukh = new Support('SRK', 'Dubai', 9);
const akshay = new Support('Akshay', 'Dubai', 3);

const alia = new StudentCare('Aliaa', 'Mumbai');
console.log(aamir);
console.log(alia);

// console.log(salman);
// console.log(shahrukh);
// console.log(akshay);

// aamir.startSession();
// salman.startSession();
// shahrukh.startSession();
// akshay.startSession();