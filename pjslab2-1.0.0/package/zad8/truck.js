"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Truck = void 0;
var car_1 = require("./car");
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
}(car_1.Car));
exports.Truck = Truck;
