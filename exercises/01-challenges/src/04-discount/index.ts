/**
 * Create a function that takes two arguments: the final price and the discount percentage as integers.
 * Return the final price after the discount.
 */

function discount(price: number, discount: number) {
    const discountAmount = price * discount/100; 
    return price - discountAmount; 
 }

export { discount };