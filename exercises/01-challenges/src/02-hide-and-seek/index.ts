/**
 * A lowercase word is hiding amongst a crowd of uppercase letters! 
 * Write a function that returns the hidden name.
 */

function hideAndSeek(crowd: string) {
    const letters: string[] = []; 
    crowd.split('').forEach(letter => {
        if(letter.toLowerCase() === letter){
            letters.push(letter); 
        }
    })
    return letters.join(''); 
 }

export { hideAndSeek };