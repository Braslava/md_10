/**
 * Write a function that takes the number of seconds and returns the digital format clock time as a string. 
 * Time should be counted from 00:00:00.
 */

function digitalClock(seconds: number) {
    const timeFormatted = (num: number) => {
        if (num < 10) {
            return '0' + num.toString();
        } else
            return num.toString();
    }

    let hours: string = '';

    const rawHours = Math.floor(seconds / 3600);
    if (rawHours === 24) {
        hours = '00'
    } else {
        hours = timeFormatted(rawHours);
    }

    const minutes = timeFormatted(Math.floor(seconds % 3600 / 60));
    const remainingSeconds = timeFormatted(seconds % 3600 % 60);

    return `${hours}:${minutes}:${remainingSeconds}`;
}

export { digitalClock };