const date1 = new Date();
console.log(date1);

const date2 = new Date(2022, 10, 20);
console.log(date2);

const date3 = new Date(2022, 10, 10, 14, 19, 3, 123);
console.log(date3);

const date4 = new Date(1662794410563);
console.log(date4);

// * Epoch & Unix timestamp

const timestamp = Date.now();
console.log(timestamp);

const date5 = new Date(timestamp);
console.log(date5.getTime());

// * Pasing date

const parseTimestamp = Date.parse("2022-10-10T08:12:21.123+07:00");
console.log(parseTimestamp);

const datePase = new Date(parseTimestamp);
console.log(datePase);

// * Getter & Setter

const waktu = new Date();
console.log(waktu.getFullYear());
console.log(waktu.getMonth());
console.log(waktu.getDate());
console.log(waktu.getHours());
console.log(waktu.getMinutes());
console.log(waktu.getSeconds());
console.log(waktu.getMilliseconds());
console.log(waktu.getTimezoneOffset());
