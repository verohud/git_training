//tohle je trida. sablona.

// klicove slovo this odkazuje na properties

export class CarBluePrint {
  constructor(color, engine, fuel, carName) {
    this.color = color;
    this.engine = engine;
    this.fuel = fuel;
    this.carName = carName;
    this.wheels = 4; //Hardcore property, Magic number. Auto vzdy bude mit 4 kola
    console.log(
      `Auto "${this.carName}" bylo vyrobeno s vlastnostmi: \n\t - motor: ${this.engine} \n\t - typ paliva: ${this.fuel}\n\t - barva: ${this.color} \n\t - počet kol: ${this.wheels}`,
    );
    this.logDivider();
  }
  logCarProperties() {
    console.log(
      `Informace o autě jmenem ${this.carName}:\n\t motor: ${this.engine},\n\t palivo: ${this.fuel}, \n\t barva: ${this.color},\n\t počet kol: ${this.wheels}.`,
    );
    this.logDivider(); //rikam, uvnitr teto tridy, zavolej logDivider
  }

  //vytvorit novou metodu, ktera bude oddelovat text v console. Dbra praxe mezi metodama odradkovat 2x. MEtodata logDivider
  logDivider() {
    console.log("----------------------------------------------");
  }

  repaint(newColor) {
    const oldColor = this.color; //nova metoda
    this.color = newColor;
    console.log(
      `Auto "${this.carName} bylo prebarveno z ${oldColor} na ${this.color}"`,
    );
    this.logDivider();
  }

  getEngine() {
    return this.engine; // return vraci hodnotu jako vysledek metody/funkce. Zaprikazem return se jiz neprovadi zadne prikazy. Je to finalni krok funkce/metody.
  }
}
