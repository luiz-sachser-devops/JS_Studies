/* CHALLENGE 01

 Code a program to calculate the cost of a trip
 3 Variables: 
 1 - Price of Fuel
 2 - Average fuel consumption / Km
 3 - Distance of the trip (Km)
 OUTPUT: Print in the console the cost of the trip in $$ for this trip 
*/

const priceFuel = 1.16;     // in $$
const avgConsumption = 15;  // Km per Litre
let dist = 257;     // distance in Km

cost = dist/avgConsumption * priceFuel;

console.log(cost.toFixed(2));  // toFixed() stablishes number of decimal values converted to TEXT 

