// function greet() {
//   return console.log("Hello user");
// }

// const greetings = greet();
// console.log("greetings::", greetings);

function sum(a, b) {
  //values passed inside function : Parameters
  const add = a + b;
  return add;
}

// const addedVar = sum(1, 2);
// console.log("addedVar:", addedVar);

function subtraction(a = 5, b = 1) {
  return a - b;
}

// console.log("subtraction", subtraction(12, 10));

//REST OPERATOR\

function cartItems(val1, val2, ...item) {
  console.table([val1, val2]);
  console.log(item);
}

cartItems("glasses", "Bag", "Ghadi", "Cat food", "meow food");
