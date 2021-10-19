/**
 * Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order in a new array.
 */

function maxMin(numbers: number[]): number[] {
    let min = numbers[0];
    let max = numbers[0];

    for (let num of numbers) {
        if (num < min) {
            min = num;
        }
    }
    for (let num of numbers)
        if (num > max) {
            max = num;
        }

    return [min, max];
}
export { maxMin };