//tady se vytvareji objekty. Muze jich byt vice a jsou na sobe nezavisle

import { CarBluePrint } from "./car_blueprint.js";

const dieselCar = new CarBluePrint("Pink", "1.6 TDI", "Diesel", "Ropak");
dieselCar.logCarProperties();

const electricCar = new CarBluePrint("Modra", "EV 160KW", "Elektro", "Blesk");
electricCar.logCarProperties();
dieselCar.logCarProperties();

dieselCar.repaint("Zelena");
dieselCar.logCarProperties();
electricCar.logCarProperties();

const dieselCarEngine = dieselCar.getEngine();
console.log("Motor ropaku: " + dieselCarEngine);
