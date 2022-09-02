class MathUtil {
  static sum(...numbers) {
    let total = 0;
    for (const number of numbers) {
      total += number;
    }
    return total;
  }
}

const result = MathUtil.sum(2, 3, 4, 5, 23, 6, 7);
console.log(result);
