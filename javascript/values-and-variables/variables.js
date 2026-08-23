//javascript/values-and-variables
// variables = promenne, kde budeme ukladat data, ketere pak muzeme v programu prepouxzivat. Promenne se muzou menit

let firstName = "Veronika"; //deklarace promenne + ulozeni - prirazovaci operator =
let lastName;
lastName = "Hudakova";
console.log(firstName);
console.log(firstName + " " + lastName);

firstName = "Stella"; //reinicializace promenne

console.log(firstName);

// Vlastnosti promennych var, let, const. var se nepouziva - je zastaraly

let city; //muzu jen deklarovat, bez inicializace. Nemuzu ji redeklarovat (vytvorit znovu)
//let se deklaruje uvnotr bloku a tzn, ze existuje jen uvnitr bloku

city = "Olomouc";
{
  let country = "Czechia";
  console.log(country);
  console.log(city); // je v poradku, promenna mimo blok se dostava do bloku. Jen naopak (viz country nize) to fungovat nebude
}

//console.log(country); chyba!! pri spusteni Country is not defined

//promenne const

const email = "veronikah@post.cz"; //musi byt inicializovana ve chvili deklarace. Nelze redeklarovat, je konstantni. Muze byt taktez definovana pro blok.

//email = "jiny mail"; //chyby hodi Node.js
