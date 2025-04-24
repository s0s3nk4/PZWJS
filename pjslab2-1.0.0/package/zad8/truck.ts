import {Car} from "./car";

export class Truck extends Car
{
    capacity: number;

    constructor(brand: string, model: string, year: number, capacity: number)
    {
        super(brand, model, year);
        this.capacity = capacity;
    }

    showTruckInfo(): void
    {
        super.showCarInfo();
        console.log(`Capacity: ${this.capacity} tons`)
    }
}