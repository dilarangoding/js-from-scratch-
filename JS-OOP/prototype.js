function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// add property to prototype

Person.prototype.sayHello = function () {
  console.log("Hello ");
};

Person.prototype.run = function () {
  console.log(`${this.firstName} is running`);
};

const john = new Person("john", "Dhoe");
john.sayHello = function () {
  console.log("Halo John");
};

const dhoe = new Person("Dhoe", "John");

console.log(john);
console.log(dhoe);

john.sayHello();
john.run();

dhoe.sayHello();
dhoe.run();
