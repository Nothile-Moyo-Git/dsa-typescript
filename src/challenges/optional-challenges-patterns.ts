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

// =======================================================================================================================
// Is Subsequence
//
// This challenge is to see if you can create a substring with the characters found in the main string
// The subsequence has to be ordered, not just checking if the characters fit
// 
// Time Complexity: O(N + M)
// =======================================================================================================================
const isSubsequence = (subsequence: string, sequence: string): boolean => {

    // Vanilla handling if the inputs aren't alid
    if (subsequence.length === 0) {
        return true;
    }

    if (sequence.length === 0) {
        return false;
    }

    let index = 0;

    // Check every character, if we have it, increment the index
    // If the index meets the size of the substring
    // It's more efficient than concatenating strings
    for (const value of sequence) {

        if (subsequence[index] === value) {
            index++;
        }
    }

    if (index === subsequence.length) {
        return true;
    }

    return false;
};

// =======================================================================================================================
// Find Pair
//
// This challenge is to find a pair of values in an unsorted array
// You can use a divide and conquer strategy here comprising of multiple patterns
// 
// Time complexity: O(n)
// =======================================================================================================================
const findPair = (numbers: number[], value: number): boolean => {

    if (numbers.length < 2) return false;

    const seen = new Set<number>();

    for (const num of numbers) {
        const complement = value + num; // looking for: num + complement = value... 
        // wait, we want second - first = value, so complement = num + value OR num - value
        if (seen.has(complement) || seen.has(complement)) {
            return true;
        }
        seen.add(num);
    }

    return false;
};

console.log("Multiple pointers: ");
/* console.log("Average pair:");
console.log(averagePair([1,2,3],2.5)); // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)); // true 
console.log(averagePair([-1,0,3,4,5,6], 4.1)); // false
console.log(averagePair([],4)); // false
console.log("\n"); */

/* console.log("isSubsequence: ");
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order) */

/* console.log(findPair([6,1,4,10,2,4,7], 2)); // true
console.log(findPair([8,6,2,4,1,0,2,5,13],1)); // true 
console.log(findPair([4,-2,3,10],-6)); // true
console.log(findPair([6,1,4,10,2,4], 22)); // false
console.log(findPair([], 0)); // false 
console.log(findPair([5,5], 0)); // true 
console.log(findPair([-4,4], -8)); // true 
console.log(findPair([-4,4], 8)); // true
console.log(findPair([1,3,4,6],-2)); // true
console.log(findPair([0,1,3,4,6],-2)); // true
console.log(findPair([1,2,3], 0)); // false */

// =======================================================================================================================
// Max Sub Array Sum
//
// Find the maximum value of a subarray based on the size based through the parameters
// This should use a sliding window
// 
// Time complexity: O(n)
// =======================================================================================================================
const maxSubarraySum = (values: number[], size: number): number | null => {

    if (values.length === 0) {
        return 0;
    }

    if (values.length < size) {
        return null;
    }

    let total = 0;

    for (let index = 0; index < size; index++) {

        const value = values[index];

        if (value !== undefined) {
            total += value;
        }
    }
    
    const max = values.length - 1;
    let highest = total;

    for (let index = size - 1; index < max; index++) {

        // If the max is two, don't add the one otherwise it breaks the loop
        const previous = values[(index - size) + 1];
        const next = values[index + 1];

        if (previous !== undefined && next !== undefined) {
            total = total - previous;
            total = total + next;
        }

        if (total > highest) {
            highest = total;
        }

    }

    return highest;
};

const minSubArrayLen = (values: number[], sumToBeat: number): number => {

    if (values.length === 0) {
        return 0;
    }

    if (values.length === 1) {
        let greaterOrEqual = values[0] !== undefined && values[0] >= sumToBeat;

        if (greaterOrEqual === true) {
            return 1;
        } else {
            return 0;
        }
    }

    let total = 0;

    const first = values[0];
    const second = values[1];

    if (first !== undefined && second !== undefined) {
        total = first + second;
    }

    // Tomorrow notes
    // You need to handle a size of 2 as well, if it's greater, cool, if not, return 0
    if (values.length === 2) {
        if (total >= sumToBeat) {
            return 2;
        } else {
            return 0;
        }
    }

    const max = values.length;
    let startingPosition = 1;
    let windowPosition = 1;
    let initialSize = 2;
    let currentSize = 2;
    let currentTotal = total;

    let testingSizeToBeDeleted = 2;
    let window = testingSizeToBeDeleted + startingPosition;

    // Tomorrow notes
    // You need to get the initial total
    // Don't get it in the loop
    // Slide it across and iterate on that

    console.log("Max: ", max);
    console.log("Total: ", total);
    console.log("Window: ", window);

    while (currentSize < max) {

        const previousValue = values[startingPosition - 1];
        const nextValue = values[startingPosition + 1];



        console.log("First: ", first);
        console.log("Second: ", second);
        console.log("Current total: ", currentTotal);

        if (previousValue !== undefined && nextValue !== undefined) {

            currentTotal -= previousValue;
            console.log("Current - previous", currentTotal);
            currentTotal += nextValue;
            console.log("Current + next: ", currentTotal);

            console.log("Previous value: ", previousValue);
            console.log("Next value: ", nextValue);
            console.log("Current total: ", currentTotal);
        }

        if (currentTotal >= sumToBeat) {
            return initialSize;
        }

        console.log("Updated total: ", total);
        console.log("\n");

        startingPosition++;
        windowPosition++;
        currentSize++;
    }

    return currentSize;
};

console.log("Sliding window");
/* console.log("Max sub array sum: ");
console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null */

console.log("MinSubArrayLen: ");
console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> because [4,3] is the smallest subarray
/* minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0 */
