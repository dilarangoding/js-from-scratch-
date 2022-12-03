const company = "PT PALU GADA";

function sum(val1, val2) {
  return val1 + val2;
}

class Company {
  constructor(name) {
    this.name = name;
  }
}

// export { company as perusahaan, sum as total, Company as Perusahaan };
export { company, sum, Company };
