/**
 * Write a function that returns true if the given string ends with a question mark, false if not.
 * 
 * Example
 * 
 * Input: "French fries?"
 * Output: true
 */

function isQuestion(input: string) { 
    const lastChar: string = input[input.length -1]; 
    return lastChar === '?' 
}

export { isQuestion };