class Customer {
  firstName;
  lastName;
  balance = 0;

  constructor(firstName, lastName, balance) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.balance = balance;
  }

  sayHello() {}
}

const john = new Customer("John", "Dhoe", 50000);

console.log(john);
