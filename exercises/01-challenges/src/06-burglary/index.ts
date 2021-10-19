/**
 * You just returned home to find your mansion has been robbed! 
 * Given an object of the stolen items, return the total amount of the burglary (number).
 * If nothing was robbed, return the string "Lucky you!".
 */

function burglary(input: { [key: string]: number }): number | string {
    if (Object.values(input).length === 0) {
        return "Lucky you!"; 
    } else {
        const stolenItems = Object.values(input); 
        return stolenItems.reduce((accumulator: number, currentValue: number) => accumulator + currentValue, 0) as number; 
    }
}


export { burglary };