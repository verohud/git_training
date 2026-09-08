//udelame si seznam. Pole se ukladaji do konstanty a do hranatych zavorek. Seznam uzivatelu, scenaru, prvku atd.

const cities = ["London", "Oxford", "Cambridge", "Richmond"];
console.log(cities);

// ve vetsine pripadu, budeme chtit pristupovat jen k urcitemu prvku v seznamu. Kazdy prvek v seznamu ma svuj index, zacina se 0

console.log("Druhe mesto: " + cities[1]);

cities.push("Bristol");
console.log(cities);

for (let i = 0; i < cities.length; i++) {
  console.log("Mesto: " + cities[i]);
}

//forEach - specialni typ cyklu. viz cycles folder
