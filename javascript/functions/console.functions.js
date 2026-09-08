//standardni funkce. Do zavorek davame parametry funkci x konstantni funkce

function logHelloWorld() {
  console.log("Hello world!"); //kdyz chci tohle zavolat, tak to musim udelat mimo tento blok - viz nize (pomoci jmena a povinnych zavorek): logHelloWorld();
}

function logText(textParameter) {
  //textParameter se bude deklarovat mimo funkci
  console.log("2026-08-26 17:39 " + textParameter); //parametry funkci
}

logHelloWorld(); //funkce je zkratka prepouzitelny kousek kodu
logHelloWorld();
logText("Jsme mistri v JavaScriptu!"); //argument coz je hodnota, kt prirazujeme funkci ve spoustecim programu
logText("Tesime se na objekty!");
