// * Proxy fitur digunakan sebagai wakil sebuah data / jembatan

const target = {
  middleName: "Widodo",
};

const handler = {
  get: function (target, property) {
    console.log(`Access property : ${property}`);
    return target[property];
  },

  set: function (target, property, value) {
    console.log(`Change Property ${property} : ${value}`);
    if (value === null) {
      target[property] = "";
    } else {
      target[property] = value;
    }
  },
};

const proxy = new Proxy(target, handler);
proxy.firstName = "Joko";
proxy.lastName = null;

console.log(proxy.firstName);
console.log(proxy.middleName);
console.log(proxy.lastName);

console.log(target);
