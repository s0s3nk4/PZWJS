import {Car} from "./car";
import {Truck} from "./truck"

const car1 = new Car("Volkswagen", "Golf", 2004);
const truck1 = new Truck("Volvo", "FH16", 2021, 25);

car1.showCarInfo();
truck1.showTruckInfo();