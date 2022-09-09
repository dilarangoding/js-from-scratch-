const person = {
  firstName: "Johen",
  middleName: "Alex",
  lastName: "Ferguson",
  address: {
    country: "Bekasi",
    city: "Tambun",
  },
  hobbies: ["Berburu", "Memanah", "Memancing"],
};

const json = JSON.stringify([person]);
console.log(json);

const jsonObject = JSON.parse(json);
console.log(jsonObject);
