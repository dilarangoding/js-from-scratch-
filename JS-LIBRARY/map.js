// * Map

const map = new Map();
map.set("Name", "Joko Andriono");
map.set("Address", "Tambun");

console.log(map);
console.log(map.get("Name"));
console.log(map.get("Address"));
console.log(map.get("Hobby"));

map.forEach((val, key) => console.log(`${key} : ${val}`));
