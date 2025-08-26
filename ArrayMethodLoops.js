const numbers = [1, 2, 3, 4, 5];

//    ----FILTER METHOD---
// const greaterNums = numbers.filter((num) => num > 3);
// console.log("Greatere nums::", greaterNums);

// ---FILTERING AN ARRAY USING FOREACH---
// let greatNums = [];
// numbers.forEach((num) => {
//   if (num > 3) {
//     greatNums.push(num);
//   }
// });

// console.log("for eached great nums::", greatNums);

// ---MAP METHOD---

// const doubledNums = numbers.map((num) => num * 2);
// console.log("doubled numbers using map::", doubledNums);

// --- DOUBLE NUMS USING FOR EACH ---
// let doubleNumbers = [];
// numbers.forEach((num) => {
//   const dlet doubleNumbers = [];
// numbers.forEach((num) => {
//   const double = num * 2;
//   doubleNumbers.push(double);
// });
// console.log("double numbers using for each::", doubleNumbers);ouble = num * 2;
//   doubleNumbers.push(double);
// });
// console.log("double numbers using for each::", doubleNumbers);

// ---REDUCE METHODS ---

// const totalSum = numbers.reduce((acc, current) => acc + current, 0);
// console.log(totalSum);

const books = [
  {
    name: "Harry Potter",
    author: "Hrit",
    price: 1200,
  },
  {
    name: "Monk who sold his ferrari",
    author: "Robin Sharma",
    price: 1000,
  },
  {
    name: "Rubik Cube master",
    author: "Russel",
    price: 1000,
  },
];

// const totalBookPrice = books.reduce((totalPrice, book) => totalPrice + book.price, 0);
// console.log("total price of books in cart::", totalBookPrice);

//MAP

// const doubledNums = [];

// numbers.forEach((num) => {
//   const double = num * 2;
//   doubledNums.push(double);
// });

// console.log("dobuled nums", doubledNums);

// const mappedDoubledNums = numbers.map((num) => num * 2);
// console.log(mappedDoubledNums);

const totalPrice = books.reduce((total, current) => total + current.price, 0);

console.log(totalPrice);
