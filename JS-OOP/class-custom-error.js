class ValidationError extends Error {
  constructor(message, field) {
    super(message);
    this.field = field;
  }
}

class MathUtil {
  static sum(...numbers) {
    if (numbers.length === 0) {
      throw new ValidationError("Parameter harus lebih dari 0", "numbers");
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
  if (error instanceof ValidationError) {
    console.log(
      `Ada error di field ${error.field} dengan error : ${error.message}`
    );
  } else {
    console.log(`Ada error : ${error.message}`);
  }
} finally {
  console.log("Lanjut gan");
}
