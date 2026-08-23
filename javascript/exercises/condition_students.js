const student = "Jan Novy";
const studentPocetBodu = 70;
const successPocetBodu = 75;
const cervenyDiplom = 95;

if (studentPocetBodu >= successPocetBodu) {
  console.log(`${student} ma dostatek bodu k uspesnemu ukonceni studia`);
} else if (studentPocetBodu < successPocetBodu) {
  console.log(`${student} nema dostatecny pocet bodu k ukonceni studia`);
}
