// const animal = "dog";

// if (true) {
//   var animal = "meow";
//   console.log("animal::", animal);
// }

// console.log("outere animal::", animal); //THROWS ERROR

// var classroom = 9;

// if (true) {
//   var classroom = 8;
//   console.log("classroom::", classroom);
// }

// console.log("outere animal::", classroom);
// greet();
// function greet() {
//   student = "Hrit";
//   console.log(student);
// }

// console.log("outer student::", student);
// meow();
// const meow = function () {
//   console.log("meow");
// };

// const person = "Rahul";

// if (true) {
//   const person = "Sangam";
//   console.log(person);
// }

// if (true) {
//   const drinks = "Cocacola";
//   if (true) {
//     const momo = "Chicken";
//     console.log(drinks, momo);
//   }
// }
// console.log(drinks);

//CLOSURE
function lunch() {
  const drinks = "Cocacola";
  function snacks() {
    const momo = "Chicken";
    console.log(drinks, momo);
  }
  snacks();
}

lunch();
