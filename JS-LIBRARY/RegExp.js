// * Regular Experssion
// * Fitur untuk mencari text dengan pola yang kita buat sendiri

{
  // ! Create Regex
  const regex1 = /[john]/;
  const regex2 = new RegExp("john");
  const regex3 = new RegExp(/john/);
}

{
  // ! Instance method Regex

  const name = "John Abdul Dhoe";
  const regex = /Dhoe/;

  let result = regex.exec(name);
  console.log(result);

  let test = regex.test(name);
  console.log(test);
}

{
  // ! Regex Modifier

  const name = "John abdul Dhoe\njohn dhoe\nSlamet John Abdul";
  const regex1 = /^John/gim;
  const regex2 = /Abdul/gi;

  let result;
  while ((result = regex1.exec(name)) !== null) {
    console.log(result);
  }

  while ((result = regex2.exec(name)) !== null) {
    console.log(result);
  }
}

{
  // ! Advanced regex

  const regex = /ek[ioaeu]/gi;

  const name = "eka eko eki eku edo eko eki edi";
  let result;
  while ((result = regex.exec(name)) !== null) {
    //console.log(result);
  }
}
{
  const name = "eda eko eki eku edo eko eki edi eka";
  console.log(name.match(/ek[aiueo]/gi));
  console.log(name.search(/ek[aiueo]/gi));
  console.log(name.replace(/ek[aiueo]/i, "Ampun"));
  console.log(name.replaceAll(/ek[aiueo]/gi, "Ampun"));
  console.log(name.split(/e/gi));
}
