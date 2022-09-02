class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  get fullName() {
    return `My name is ${this.firstName} ${this.lastName}`;
  }

  set fullName(value) {
    const result = value.split(" ");
    this.firstName = result[0];
    this.lastName = result[1];
  }
}

const john = new Person("John", "Dhoe");
console.log(john);
console.log(john.fullName);
john.fullName = "Agung Susilo";
console.log(john);
