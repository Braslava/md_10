/**
 * You're given a string of words. 
 * You need to find the word "Nemo", and return a string like so: "I found Nemo at X!", X is the index of the word.
 * If you can't find Nemo, return "I can't find Nemo :(".
 */

function findingNemo(input: string) {
    const isNemo = (word: string) => word === "Nemo"; 
    const indexOfNemo = input.split(" ").findIndex(isNemo); 
    if (indexOfNemo >= 0) {
        return `I found Nemo at ${indexOfNemo}!`; 
    } else {
        return "I can't find Nemo :("; 
    }
    
 }

export { findingNemo };