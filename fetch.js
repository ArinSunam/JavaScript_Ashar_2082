// const fetchedData = () =>
//   fetch("https://jsonplaceholder.org/posts")
//     .then((res) => res.json())
//     .then((data) => console.log(data));

// fetchedData();

const fetchedData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.org/posts");
    const data = await res.json();
    console.log("data", data);
  } catch (error) {
    console.log("something went  wrong", error);
  }
};
fetchedData();
