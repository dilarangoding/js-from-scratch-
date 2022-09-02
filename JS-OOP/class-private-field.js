class Counter {
  #counter = 0;

  increment() {
    this.#counter++;
  }
  decrement() {
    this.#counter--;
  }

  get() {
    return this.#counter;
  }
}

const counter = new Counter();
for (let i = 0; i < 10; i++) {
  counter.increment();
}

console.log(counter.get());
console.log(counter);
