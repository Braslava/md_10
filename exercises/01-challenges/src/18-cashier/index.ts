/**
 * Today you work at a store as the cashier, but 10 minutes before your lunch break, the cash register stops working.
 * Create a function that takes an array of objects (groceries) which calculates the total price and returns it as a number. 
 * A grocery object has a product, a quantity and a price.
 */

function cashier(groceries: Grocery[]): number {
    const total = groceries.reduce(function (accumulator, currentValue) {
        return accumulator + currentValue.price * currentValue.quantity
    }, 0);
    return total;
}
export { cashier };

interface Grocery {
    product: string;
    quantity: number;
    price: number;
}