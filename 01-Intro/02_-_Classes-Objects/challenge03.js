/*
    - Create a class to represent Cars.
    The cars possess Make, colour and average fuel consumption per Km atributes.
    - Create a method that given the Kms and the price of fuel, the output shows the 
    price to run the distance.
*/

class Car {
    make;
    colour;
    avgFuelConsumption;

    constructor (make, colour, avgFuelConsumption) {
        this.make = make;
        this.colour = colour;
        this.avgFuelConsumption = avgFuelConsumption;
    }

    calculatePrice(distance, fuelPrice) {
        return (distance * this.avgFuelConsumption * fuelPrice);
    }
}


// Instances

const civic = new Car('Honda', 'Silver', (1/10));
const corolla = new Car('Toyota', 'Black', (1/14));


console.log(civic.calculatePrice(340, 5.4));
