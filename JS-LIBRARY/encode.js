{
  // ! encode uri & decode uri
  const url = "http://example.com/?name=Joko&=Bambang=Widodo";
  console.log(url);

  const encoded = encodeURI(url);
  console.log(encoded);

  const decoded = decodeURI(url);
  console.log(decoded);
}

{
  const value = "Joko&=Bambang=Widodo";
  const url = "https://example.com/?name=";

  console.log(url + value);

  const encoded = encodeURIComponent(value);
  console.log(url + encoded);

  const decoded = decodeURIComponent(value);
  console.log(url + value);
}
