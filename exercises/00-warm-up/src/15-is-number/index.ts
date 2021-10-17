/**
 * Write a function that returns true if the given value is a number, false if not.
 * 
 * Example
 * 
 * Input: 6
 * 
 * Output: true
 */

function isNumber(input: any) {
    return typeof(input) === "number"; 
 }

export { isNumber };