/*
    Develop an algorithm that calculates the final price of a product considering the ticket
    price and the way of payment, as follows:

    1 - Payment using Debit card - 10% Discount
    2 - Cash payment - 15% discount
    3 - Payment in 2 montly instalments - Normal Price
    4 - Payment in more than 2 monthly instalments - 10% interest rate
*/

function applyDiscount(value, discount) {
    return (value - (value * (discount / 100)));
}

function applyInterest(value, interest) {
    return (value + (value * (interest / 100)));
}

const ticketPrice = 100;
const wayOfPayment = 4;

if (wayOfPayment === 1) {
    console.log(applyDiscount(ticketPrice, 10));
} else if (wayOfPayment === 2) {
    console.log(applyDiscount(ticketPrice, 15));
} else if (wayOfPayment === 3) {
    console.log(ticketPrice);
} else {
    console.log(applyInterest(ticketPrice, 10));
}