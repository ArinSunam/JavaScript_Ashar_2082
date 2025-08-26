const prom = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ username: "Hrit", email: "hrit@mail.com" });
    } else {
      reject({ message: "Something went wrong" });
    }
  }, 2000);
});

prom
  .then((res) => {
    return res.email;
  })
  .then((user) => console.log(user))
  .catch((err) => console.log("error", err));
