function Person() {
  this.firstName = "";
  this.lastName = "";
  this.sayHello = function (name) {
    console.log(`Hello ${name}, my name is ${this.firstName} ${this.lastName}`);
  };
}

const john = new Person();
john.firstName = "John";
john.lastName = "Dhoe";
john.sayHello("Ahmad");
