/**
 * You are on your way to becoming a professional, time to master objects.
 * Create a function that takes an object and returns the keys and values as separate arrays. 
 * Return the keys sorted alphabetically, and their corresponding values in the same order.
 */

function objectPro(input: any) { 
    const inputKeys: string[] = []; 
    const inputValues: any[] = []; 

    const sortedEntries = Object.entries(input).sort((b, a) => b[0].localeCompare(a[0]));

    sortedEntries.forEach(([key, value]) => {
        inputKeys.push(key); 
        inputValues.push(value); 
    }); 
    return [inputKeys, inputValues]; 
}


export { objectPro };