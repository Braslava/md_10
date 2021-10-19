/**
 * You have decided to teach programming at a kindergarten, but you cannot understand half of what the children are saying.
 * Write a function that reverses all the words in a sentence that start with a particular letter.
 */

function kindergarten(sentence: string, letter: string): string {
    const words: string[] = sentence.split(' ');

    const correctWords: string[] = words.map(word => {
        if (word.startsWith(letter)) {
            return word = word.split('').reverse().join('');
        } else {
            return word = word;
        }
    });
    return correctWords.join(' ');
}

export { kindergarten };