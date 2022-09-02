const input = "12345";
const number = Number(input)

console.log(typeof input);
console.log(typeof number);
console.log(number);

console.log(Number("string"));

// ? Number static properties
console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

// ? Number Static Method
const data = Number('1212');
console.log(Number.isInteger(data));
console.log(Number.isNaN(data));

// ? Number Instance Method
const val = Number(21321321321);
console.log(val.toString(2));
console.log(val.toLocaleString("id-ID"));