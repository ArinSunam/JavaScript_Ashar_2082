//for...of

const arr = ["Hrit", "Ayush", "Motu"];
// for (const element of arr) {
//   console.log(element);
// }
// const greetings = "Namaste";
// for (const greet of greetings) {
//   console.log(greet);
// }

// const person = {
//   name: "Russel",
//   feature: "late-commer",
//   talent: "Rubik cude master",
// };

// for (const pers in person) {
//   console.log(`key-${pers}  value-${person[pers]}`);
// }

const newArray = arr.forEach((value, index, array) => {
  console.log(`first parameter takes value - ${value.toUpperCase()}`);
  console.log(`second parameter takes index - ${index}`);
  console.log(`third parameter takes array - ${array}`);
});

console.log(newArray);
