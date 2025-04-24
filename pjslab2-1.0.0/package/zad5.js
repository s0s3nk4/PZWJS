var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(brand, model, year, capacity) {
        var _this = _super.call(this, brand, model, year) || this;
        _this.capacity = capacity;
        return _this;
    }
    Truck.prototype.showTruckInfo = function () {
        _super.prototype.showCarInfo.call(this);
        console.log("Capacity: ".concat(this.capacity, " tons"));
    };
    return Truck;
}(Car));
var car1 = new Car("Volkswagen", "Golf", 2004);
var car2 = new Car("Ford", "Mustang", 2018);
var car3 = new Car("Peugeot", "206", 2004);
var truck1 = new Truck("Volvo", "FH16", 2021, 25);
car1.showCarInfo();
car2.showCarInfo();
car3.showCarInfo();
truck1.showTruckInfo();
