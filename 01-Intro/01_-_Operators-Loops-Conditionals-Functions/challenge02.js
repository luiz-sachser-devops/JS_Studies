/* CHALLENGE 02

 Code a program to calculate the cost of a trip
 5 Variables: 
 1 - Price of Gas Fuel
 2 - Price of Ethanol Fuel
 3 - Type of Fuel
 4 - Average fuel consumption / Km
 5 - Distance of the trip (Km)
 OUTPUT: Print in the console the cost of the trip in $$ for this trip 
*/

const priceGasFuel = 1.16;     // in $$
const priceEthanolFuel = 1.52;     // in $$
const avgConsumption = 15;  // Km per Litre
let dist = 1467;     // distance in Km
const typeFuel = 'Gas';

const litersConsumed = dist / avgConsumption;

// Used console.log inside the IF statement because the costTrip is out of scope. const and let do not allow the variable leak out of scope

if (typeFuel === 'Ethanol') {
    const costTrip = litersConsumed * priceEthanolFuel;     
    console.log(costTrip.toFixed(2));
} else {
    const costTrip = litersConsumed * priceGasFuel;
    console.log(costTrip.toFixed(2));
}

