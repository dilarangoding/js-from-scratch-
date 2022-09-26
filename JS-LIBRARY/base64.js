// * Base64 binary to text encoding, binary data dalam format string

const original = "Jimmy&Page";
console.log(original);

const encoded = btoa(original);
console.log(encoded);

const decoded = atob(encoded);
console.log(decoded);
