// 5.Task: Group books into genres using a single reduce.
const books = [
  { title: "1984", genre: "Dystopian" },
  { title: "Brave New World", genre: "Dystopian" },
  { title: "The Hobbit", genre: "Fantasy" },
  { title: "WestWorld", genre: "Dystopian" },
  { title: "Cindrella", genre: "Fairytail" },
];

//user reduce method - initialise objects
//inside reduce take genre as key
//check if the any books already exist in genre
//if book doesnot exist take empty array if exists push the value of book in the array
//return the accumulator

const categorizedBooks = books.reduce((acc, current) => {
  acc[current.genre] = acc[current.genre] || [];
  acc[current.genre].push(current.title);
  return acc;
}, {});
console.log("categorizedBooks", categorizedBooks);

const obj = {};
obj.name = "Rahul";
obj.name = "Rahul";
obj["age"] = 19;
console.log("obj", obj);
