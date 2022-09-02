class Configuration {
  static name = "Javascript Object Orianted";
  static version = 1.0;
  static author = "Dilarangoding";
}

const config = new Configuration();
console.log(config);

Configuration.version = 1.1;
console.log(Configuration.name);
console.log(Configuration.version);
console.log(Configuration.author);
