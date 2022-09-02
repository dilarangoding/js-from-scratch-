function Employee(name) {
  this.name = name;
}

function Manager(name) {
  this.name = name;
}

Manager.prototype = Object.create(Employee.prototype);

Manager.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Manger ${this.name}`);
};

Employee.prototype.sayHello = function (name) {
  console.log(`Hello ${name}, my name is Manger ${this.name}`);
};

const employee = new Employee("John");
employee.sayHello("Budi");

const manager = new Manager("Ahmad");
manager.sayHello("Budi");
