function Person(firstName, lastName) {
  this.firstName = "";
  this.lastName = "";
}

const john = new Person();
john.firstName = "John";
john.lastName = "Dhoe";

const dhoe = new Person();
dhoe.firstName = "Dhoe";
dhoe.lastName = "John";

console.log(john);
console.log(dhoe);
