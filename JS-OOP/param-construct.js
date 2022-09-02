function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
  };
}

const john = new Person("John", "Dhoe");

john.sayHello("Ahmad");
