class Employee {
  constructor(firstName) {
    this.firstName = firstName;
  }
  sayHello(name) {
    console.log(`Hi ${name}, my name is ${this.firstName}`);
  }
}

class Manager extends Employee {
  constructor(firstName, lastName) {
    super(firstName);
    this.lastName = lastName;
  }
  sayHello(name) {
    console.log(`Hi ${name}, my name is ${this.firstName} ${this.lastName}`);
  }
}

const john = new Employee("John");
john.sayHello("Agus");

const agus = new Manager("Agus", "Susilo");
agus.sayHello("Ahmad");
