// * Object Freeze & Seal

// * Object Freeze

const person = {
  firstName: "Jhon",
  lastName: "Dhoe",
};

// Object.freeze(person);
// Object.seal(person);

person.firstName = "Joko";
delete person.lastName;
console.log(person);

// * Object Assign

const target = {
  firstName: "Abdul",
};
const source = {
  lastName: "Kidul",
};

Object.assign(target, source);
console.log(target);
console.log(source);

// * Object Property name & Value

const orang = {
  firstName: "Prabodo",
  lastName: "Widodo",
};

console.log(Object.values(orang));
console.log(Object.getOwnPropertyNames(orang));
