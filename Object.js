//singleton: new Object()

//literals : {}

const person = {
  name: "Arin",
  age: 24,

  "has-sickness": false,
  "nick name": "Meow",
  isMarried: false,
};
const { age } = person;
// // person = {
// //   meow: "meow",
// // };

// person.age = 25;

// const remainingPerson = {
//   netWorth: "Rs.2000",
//   hasHouse: false,
// };
// console.log(person.name);
// console.log(person["has-sickness"]);
// console.log(person["nick name"]);
// console.log(person["age"]);

// //methods
// const objKeys = Object.keys(person);
// console.log("obj keys::", objKeys);

// const objValues = Object.values(person);
// console.log("obj vals::", objValues);

// const objEntries = Object.entries(person);
// console.log("obj entries::", objEntries);

// const addedObj = Object.assign({}, person, remainingPerson);
// console.log("person::", person);
// console.log("addedObj::", addedObj);

// const spreadForObj = { ...person, ...remainingPerson };
// console.log("spread operator on object", spreadForObj);

//OBJECT DESTURCTURING

const newPerson = {
  fullname: "Hrit Amatya",
  address: "Ghatekulo",
  studies: "Csit",
  age: 22,
};

const { fullname, address, age: newPersonAge } = newPerson;
console.log("Fullname of newperson::", fullname);
console.log("His Address:", address);
console.log("age::", newPersonAge);
