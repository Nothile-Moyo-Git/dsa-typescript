/**
 * Date created: 17/05/2026
 * 
 * Author: Nothile Moyo
 * 
 * Name: Optional challenges
 * 
 * Description: This file showcases attempts at solving the optional challenges for patterns
 */

// =======================================================================================================================
// Same Frequency
//
// This challenge is to take a number and process the frequency of integers inside of it
// If the frequences match, it's true, otherwise, it fails
// =======================================================================================================================
const sameFrequency = (firstNumber: number, secondNumber: number): boolean => {
    let success = true;

    let firstFrequencyCounter: Record<string, number> = {};
    let secondFrequencyCounter: Record<string, number> = {};

    for(const value of firstNumber.toString()) {
        firstFrequencyCounter[value] = (firstFrequencyCounter[value] || 0) + 1;
    }

    for (const value of secondNumber.toString()) {
        secondFrequencyCounter[value] = (secondFrequencyCounter[value] || 0) + 1;
    }

    for (const key in firstFrequencyCounter) {
        if (firstFrequencyCounter[key] !== secondFrequencyCounter[key]) {
            success = false;
        }
    }

    return success;
};

// =======================================================================================================================
// Are there duplicates
//
// This challenge is to take a number and process the number of duplicate items
// Allowed data types are primitives
// =======================================================================================================================
type DUPLICATES = {
    method: (...args: (string | number)[]) => boolean;
    frequencyCounter: Record<string, number>;
};

const areThereDuplicates : DUPLICATES['method'] = (...args) => {

    if (args.length === 0) {
        return false;
    }

    let success = false;
    const frequencyCounter: DUPLICATES['frequencyCounter'] = {};

    for (let index = 0; index < args.length; index++) {
        const value = args[index];
        if (value) {
            frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
        }
    }

    for (const value in frequencyCounter) {
        if (frequencyCounter[value] && frequencyCounter[value] > 1) {
            success = true
        }
    }

    return success;
};


console.log("Same frequency: ");
console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false
console.log("\n\n");

console.log("Are there duplicates: ");
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 


