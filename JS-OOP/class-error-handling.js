class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new Error("parameter harus lebih dari 0");
    }

    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

try {
  console.log(MathUtil.sum());
  console.log("Code 1");
} catch (error) {
  console.log(`Ada error : ${error.message}`);
} finally {
  console.log("Lanjut gan");
}

//try finnaly

class Counter {
  #counter = 1;
  next() {
    try {
      return this.#counter;
    } finally {
      this.#counter++;
    }
  }
}

const counter = new Counter();
console.log(counter.next());
console.log(counter.next());
console.log(counter.next());
