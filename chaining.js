// destructuring object
const myObject = {x:2, y:50, z:600, a:25, b:68};
const {x,z,b} = myObject;
// console.log(x,z,b);
// console.log(x);
// console.log(myObject?.p?.q);

// destructuring array
const [p, q] = [45, 37, 78, 65, 21];
// console.log(p,q);

const adventurer = {
    name: 'Alice',
    cat: {
      name: 'Dinah'
    }
  };
  
  const dogName = adventurer.dog?.name;
  console.log(dogName);