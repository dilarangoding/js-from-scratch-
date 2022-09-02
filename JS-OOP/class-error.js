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
console.log(MathUtil.sum());
console.log("Code 1");
const result = MathUtil.sum(1, 1, 12, 1);
console.log(result);
