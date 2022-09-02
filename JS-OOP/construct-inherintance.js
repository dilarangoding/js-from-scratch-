function Employee(firstName) {
  this.firstName = firstName;
  this.sayHello = function (name) {
    console.log(`Hallo ${name}, my name is ${this.firstName}`);
  };
}

function Manager(firstName, lastName) {
  this.lastName = lastName;
  Employee.call(this, firstName);
}

const john = new Manager("John", "Dhoe");
console.log(john);
