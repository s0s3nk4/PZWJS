"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = void 0;
var Car = /** @class */ (function () {
    function Car(brand, model, year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    Car.prototype.showCarInfo = function () {
        console.log("Vechicle: ".concat(this.brand, " ").concat(this.model, ", Year: ").concat(this.year));
    };
    return Car;
}());
exports.Car = Car;
