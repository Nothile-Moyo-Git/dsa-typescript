/**
 * Date created: 07/05/2026
 * 
 * Author: Nothile Moyo
 * 
 * Name: Frequency Counter Pattern
 * 
 * Description: This file showcases the frequency counter approach
 * It does so by iterating through a list, and then proceeding to count the frequency of each node in a hashmap
 */

type ANAGRAM = {
    method: (firstInput: string, secondInput: string) => boolean
};

type FREQUENCY_COUNTER = {
    method: (firstInput: number[], secondInput: number[]) => boolean
};

// =======================================================================================================================
// Anagram
//
// An anagram is a word or phrase that can have the letters re-arranged
// In this case, we're checking the frequency of characters in our strings
// =======================================================================================================================
const isAnagram: ANAGRAM['method'] = (firstInput, secondInput) => {

    if (firstInput.length !== secondInput.length) {
        return false;
    }

    let success = true;

    // Set hashmaps for frequency counters
    const firstCharCounter: Record<string, number> = {};
    const secondCharCounter: Record<string, number> = {};

    // Use char as in the index
    // If we have a value, increment it, otherwise, set it to 0 so we get a value of 1
    for (const char of firstInput.toLowerCase()) {
        firstCharCounter[char] = (firstCharCounter[char] || 0) + 1;
    }

    for (const char of secondInput.toLowerCase()) {
        secondCharCounter[char] = (secondCharCounter[char] || 0) + 1;
    }

    // Checks that the frequencies are the same, otherwise, the function fails
    for (const char in firstCharCounter) {
        if (firstCharCounter[char] !== secondCharCounter[char]) {
            success = false;
        }
    }

    return success;
};

// =======================================================================================================================
// Frequency counter
// 
// For this, we must check that the values in both arrays would be the same if we squared the values of the first array
// E.G [1,2] would be equal to [1, 4] in the comparison
// 
// This approach checks the frequency of items in two arrays and converts them to hashmap
// It does this to keep the time complexity to O(n) instead of O(n logn) or O(n^2)
// =======================================================================================================================
const firstInput = [1, 2, 3]; // True 
const secondInput = [1, 2, 3]; // False 
const thirdInput = [1, 2, 1]; // False

const firstComparison = [4, 1, 9];
const secondComparison = [1, 9];
const thirdComparison = [4, 4, 1];

const frequencyCounter: FREQUENCY_COUNTER['method'] = (firstInput, secondInput) => {

    // Only compare values that are the same, otherwise, return false
    if (firstInput.length !== secondInput.length) {
        return false;
    }

    // Square the first input for comparison as that's the task
    const firstInputSquared = firstInput.map((number) => number *= number);
    let success = true;
    let firstNumberCounter: Record<string, number> = {};
    let secondNumberCounter: Record<string, number> = {};

    // Check the char as a key of the string, then increment the number (counter) so we can compare them later
    for (const value of firstInputSquared) {
        // If the string at char [char] doesn't have a value, set it to 1, otherwise, increment it
        firstNumberCounter[value] = (firstNumberCounter[value] || 0) + 1;
    }

    for (const value of secondInput) {
        secondNumberCounter[value] = (secondNumberCounter[value] || 0) + 1;
    }

    for (const value in firstNumberCounter) {
        if (firstNumberCounter[value] !== secondNumberCounter[value]) {
            success = false;
        }
    }

    return success;
};

console.log("Frequency counter pattern");
console.log("Anagram:")
console.log(isAnagram("", "")); // True
console.log(isAnagram("aaz", "zza")); // False
console.log(isAnagram("anagram", "nagaram")); // True
console.log(isAnagram("rat", "car")); // False
console.log(isAnagram("awesome", "awesom")); // False
console.log(isAnagram("qwerty", "qeywrt")); // True
console.log(isAnagram("texttwisttime", "timetwisttext")); // True

console.log("\n\n");

console.log("Frequency counter:");
console.log(frequencyCounter(firstInput, firstComparison)); // True
console.log(frequencyCounter(secondInput, secondComparison)); // False
console.log(frequencyCounter(thirdInput, thirdComparison)); // False