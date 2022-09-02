class Employee {
  sayHello(name) {
    console.log(`Hi ${name}, my name is ${this.name}`);
  }
}

class Manager extends Employee {
  //   sayHello(name) {
  //     console.log(`Hi ${name}, my name is ${this.name}`);
  //   }
}

const john = new Employee();
john.name = "john";
john.sayHello("Abdul");

const abdul = new Manager();
abdul.name = "Abdul";
abdul.sayHello("John");
