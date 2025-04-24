"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var car_1 = require("./car");
var truck_1 = require("./truck");
var car1 = new car_1.Car("Volkswagen", "Golf", 2004);
var truck1 = new truck_1.Truck("Volvo", "FH16", 2021, 25);
car1.showCarInfo();
truck1.showTruckInfo();
