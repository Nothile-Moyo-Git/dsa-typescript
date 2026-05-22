/**
 * Date created: 17/05/2026
 * 
 * Author: Nothile Moyo
 * 
 * Name: Optional challenges
 * 
 * Description: This file showcases attempts at solving the optional challenges for patterns
 */

type FREQUENCY_COUNTER = {
    property: Record<string, number>;
};

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

// =======================================================================================================================
// Construct note
//
// This challenge is to take a string of letters, one as a message
// Return a boolean which determines whether the letters can be arranged to form the string
// =======================================================================================================================
const constructNote = (message: string, letters: string): boolean => {
    if (message.length === 0) {
        return true;
    }

    if (letters.length === 0) {
        return false;
    }

    const lettersFrequency: FREQUENCY_COUNTER['property'] = {};
    const messageFrequency: FREQUENCY_COUNTER['property'] = {};

    for (const char of letters.toLowerCase()) {
        lettersFrequency[char] = (lettersFrequency[char] || 0) + 1;
    }

    for (const char of message.toLowerCase()) {
        messageFrequency[char] = (messageFrequency[char] || 0) + 1;
    }

    for (const char in messageFrequency) {
        if ((messageFrequency[char] || 0) > (lettersFrequency[char] || 0)) {
            return false;
        }
    }

    return true;
};

// =======================================================================================================================
// Find all duplicates
//
// This challenge is to find the duplicates in an array of positive intergers
// =======================================================================================================================
const findAllDuplicates = (values: number[]) : number[] => {
    if (values.length === 0) {
        return [];
    }

    const frequencyCounter: FREQUENCY_COUNTER['property'] = {};

    for (const value of values) {
        frequencyCounter[value] = (frequencyCounter[value] || 0) + 1;
    }

    const duplicateCounter: number[] = [];

    for (const value in frequencyCounter) {
        if (frequencyCounter[value] && frequencyCounter[value] > 1) {
            duplicateCounter.push(Number(value));
        }
    }

    return duplicateCounter;
};

/* console.log("Frequency counter:");
console.log("Same frequency: ");
console.log(sameFrequency(182,281)); // true
console.log(sameFrequency(34,14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22,222)); // false
console.log("\n");

console.log("Are there duplicates: ");
console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true
console.log("\n");

console.log("Construct note: ");
console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true
console.log("\n");

console.log("Find all duplicates: ");
console.log(findAllDuplicates([4,3,2,7,8,2,3,1])); // array with 2 and 3
console.log(findAllDuplicates([4, 3, 2, 1, 0])); // []
console.log(findAllDuplicates([4, 3, 2, 1, 0, 1, 2, 3])); // array with 3, 2, and 1
console.log("\n"); */

// =======================================================================================================================
// Average pair
//
// This challenge is to take an array of numbers and a value
// There must be a selection of a pair that averages to the number found in the argument
// 
// Time Complexity: O(n)
// Space Complexity: O(1)
// =======================================================================================================================
const averagePair = (numbers: number[], average: number) : boolean => {

    if (numbers.length === 0) {
        return false;
    }

    const max = numbers.length;
    let success = false;
    let first = 0;
    let second = max - 1;

    while (first < second) {
        const firstPointer = numbers[first];
        const secondPointer = numbers[second];

        if (firstPointer !== undefined && secondPointer !== undefined) {
            const currentAverage = (firstPointer + secondPointer) / 2;
            if (currentAverage === average) return true;
            if (currentAverage > average) second--;
            else first++;
        }
    }

    return success;
};

console.log("Multiple pointers: ");
console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true */
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false
console.log("\n");


