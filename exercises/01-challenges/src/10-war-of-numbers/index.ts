/**
 * There's a great war between the even and odd numbers. 
 * Many numbers already lost their life in this war and it's your task to end this. 
 * You have to determine which group is larger: the even, or the odd. The larger group wins.
 * Create a function that takes an array of integers, sums the even and odd numbers seperately, 
 * then returns "Odd numbers win by X" or "Even numbers win by X", X is survivors.
 * If both groups are equal, return "There are no winners"
 */

function warOfNumbers(numbers: number[]): string {
    let evenNumbers: number[] = [];
    let oddNumbers: number[] = [];

    numbers.forEach(num => {
        if (num % 2 === 0) {
            evenNumbers.push(num);
        } else {
            oddNumbers.push(num); 
        }
    }); 

    const sumEvenNumbers = evenNumbers.reduce((accumulator, currentVal) => accumulator + currentVal);
    const sumOddNumbers = oddNumbers.reduce((accumulator, currentVal) => accumulator + currentVal);

    if (sumEvenNumbers > sumOddNumbers) {
        let difference = sumEvenNumbers - sumOddNumbers;
        return 'Even numbers win by ' + difference;
    } else if (sumOddNumbers > sumEvenNumbers) {
        let difference = sumOddNumbers - sumEvenNumbers;
        return 'Odd numbers win by ' + difference;
    } else {
        return 'There are no winners'; 
    }
}

export { warOfNumbers };