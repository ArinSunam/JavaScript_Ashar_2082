function meow(user) {
  const username = "Arin";
  console.log("this inside classic func");
}
const arin = () => {
  console.log("this inside arrow func");
};

meow();
arin();

// const obj = {
//   name: "Hrit",
//   age: "23",
//   func: function () {
//     console.log(this);
//     console.log(`my name is ${this.name}`);
//   },
// };

// obj.name = "Arin";

// obj.func();
// console.log("this in global", this);

// () => {} //arrow function

// const sum = (num1, num2) => num1 + num2;
// console.log(sum(1, 2));

// const objPrint = () => ({ name: "Russel", age: 21 });
// console.log(objPrint());
// // const subtract = (num1, num2) => num1 - num2;

// // console.log(subtract(3, 4));
// const objFunct = () => ({ name: "hrit", roll: 2 });
// console.log(objFunct());

// const newObj = {
//   username: "Batmam",
//   age: 12,
//   printName: () => {
//     console.log(this); // there is no this in arrow functions
//     // console.log(this.username);
//   },
// };

// newObj.printName();
