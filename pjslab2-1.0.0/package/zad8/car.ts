export class Car
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