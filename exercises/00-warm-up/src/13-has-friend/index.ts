/**
 * Write a function that returns true if the given array includes the word "friend", false if not.
 * 
 * Example
 * 
 * Input: ["enemy", "friend", "enemy"]
 * 
 * Output: true
 */

function hasFriend(input: string[]) {
    return input.find(word => word ==="friend") === 'friend';
 }

export { hasFriend };