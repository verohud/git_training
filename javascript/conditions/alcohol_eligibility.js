/*budu potrebovat 3 promenne:
Vek
Limit
Jmeno uzivatele
*/

const actualAge = "dvacet";
const drinkingLimitAge = 18;
const fullName = "Jan Novy";

if (actualAge >= drinkingLimitAge) {
  console.log(`${fullName} uz muze pit alkohol.`); //tohle je pozitivni blok.
} else if (actualAge >= 0) {
  console.log(
    `${fullName} jeste nemuze pit alkohol, chybi mu/ji ${drinkingLimitAge - actualAge} rok/let`,
  );
} else {
  console.log("CHYBA - zadej aktualni vek, vek muze byt jen kladne cislo!");
}
