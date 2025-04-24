class Car
{
    brand: string;
    model: string;
    year: number;

    constructor(brand: string, model: string, year: number)
    {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }

    showCarInfo(): void
    {
        console.log(`Vechicle: ${this.brand} ${this.model}, Year: ${this.year}`);
    }
}

class Truck extends Car
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
        console.log(`Capacity: ${this.capacity} tons`);
    }
}

const car1 = new Car("Volkswagen", "Golf", 2004);
const car2 = new Car("Ford", "Mustang", 2018);
const car3 = new Car("Peugeot", "206", 2004);

const truck1 = new Truck("Volvo", "FH16", 2021, 25);

car1.showCarInfo();
car2.showCarInfo();
car3.showCarInfo();

truck1.showTruckInfo();