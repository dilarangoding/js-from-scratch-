class Person {
  constructor(name) {
    this.name = name;
  }

  sayHello(name) {
    console.log(`Hi ${name}, my name is ${this.name}`);
  }
}

const john = new Person("John");
john.sayHello("Ajeng");
console.log(john);
