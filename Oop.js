class User {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  greet() {
    return `this is ${this.username}`;
  }
}
User.prototype.byeUser = function () {
  console.log(`${this.username} bye bye tata`);
};

const user = new User("hrit", "hrit@mail.com");
const user2 = new User("russel", "russel@mail.com");
console.log(user.greet());
console.log(user2);

class Admin extends User {
  constructor(username, email, role) {
    super(username, email);
    this.role = role;
  }
  greet() {
    return `hello ${this.username} now you are a ${this.role}`;
  }
}

const admin1 = new Admin("Ayush", "ayush@pandey.com", "admin");
console.log(admin1.greet());
