class Person {}

Person.prototype.sayHello = function () {
  console.log("Hello");
};
const john = new Person();
john.sayHello();
console.log(john);
