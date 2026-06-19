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
// The pair of values must contain the difference which is n
// You can use a divide and conquer strategy here comprising of multiple patterns
//
// To solve this, make the difference static by always adding it, then use a set
// A lower value with the added difference should make up 
//  
// Time complexity: O(n)
// =======================================================================================================================
const findPair = (numbers: number[], difference: number): boolean => {

    const seen = new Set<number>(numbers);

    // Can't find a pair here so return false
    if (numbers.length < 2) return false;

    if (difference === 0) {
        const setToCheck = new Set();

        // Simple duplicate check as we have no difference
        for (const num of numbers) {
            if (setToCheck.has(num)) {
                return true;
            } else {
                setToCheck.add(num);
            }
        }

        return false;
    }

    // Duplicate check but accounts for the difference
    for (const num of numbers) {
        if (seen.has(num + difference) || seen.has(num - difference)) {
            return true;
        }
    }

    return false;
};

/* console.log("Multiple pointers: ");
console.log("Average pair:");
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

/* console.log("Find pair: ");
console.log(findPair([6,1,4,10,2,4,7], 2)); // true
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

// =======================================================================================================================
// Min Sub Array Len
//
// Find the minimum sub array size that finds a value equal to or greater than the second parameter
// This should use a sliding window with dynamic sizing
// 
// To do this, we add to the total then 
// **Note** Make sure you iterate over the WHOLE array.
// 
// Time complexity: O(n)
// =======================================================================================================================


/*console.log("Sliding window");
console.log("Max sub array sum: ");
console.log(maxSubarraySum([100,200,300,400], 2)); // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4));  // 39
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)); // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)); // 5
console.log(maxSubarraySum([2,3], 3)); // null */

/* console.log("MinSubArrayLen: ");
console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)); // 1 -> because [62] is greater than 52 
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)); // 3 
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)); // 5 
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)); // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)); // 0 */

// =======================================================================================================================
// findLongestSubstring
//
// Find the longest length of a substring that can be obtained from the main string
// The substring has to have distinct characters
// 
// Time complexity: O(n)
// =======================================================================================================================
const findLongestSubstring = (word: string): number => {

    if (word.length === 0) {
        return 0;
    }

    // Create a set of unique characters
    // Allows us to find the position of each letter
    let window = new Map<string, number>();
    let biggestSubString = 0;
    let left = 0;

    for (let right = 0; right < word.length; right++) {
        const char = word[right];

        if (char !== undefined) {

            if (window.has(char)) {

                // Shortcut (!) means it isn't undefined
                // Set left to the value of the recent duplicated letter then add 1, this handles the duplicate
                // It's not a frequency counter, it handles the position of the letters
                left = Math.max(left, window.get(char)! + 1);
            } 
                
            // Set the value anyway
            window.set(char, right);
            biggestSubString = Math.max(biggestSubString, right - left + 1);
        }
    }

    return biggestSubString;
};

/* console.log("findLongestSubstring:");
console.log(findLongestSubstring('')); // 0
console.log(findLongestSubstring('rithmschool')); // 7
console.log(findLongestSubstring('thisisawesome')); // 6
console.log(findLongestSubstring('thecatinthehat')); // 7
console.log(findLongestSubstring('bbbbbb')); // 1 
console.log(findLongestSubstring('longestsubstring')); // 8
console.log(findLongestSubstring('thisishowwedoit')); // 6 */

// =======================================================================================================================
// Count zeroes
//
// Find the number of zeroes in an array where the values are either 1 and then 0
// You must execute this at the performance of O(log n)
// Return the number of zeros
// 
// The trick is binary search
// 
// Time complexity: O(log n)
// =======================================================================================================================
/* const countZeroes = (numbers: number[]) : number => {

    let numberOfZeroes = 0;
    const size = numbers.length;
    let high = size - 1;
    let low = 0;
    let mid = 0;

    // Execute a binary search by splitting it by log 2 in this case
    if (numbers.length === 0) {
        return 0;
    }

    while (low < high) {
        // Find the value at the center of the search for the plit
        // You have to floor it, it works for highs but not lows + 1
        mid = Math.floor((high + low) / 2);
        const value = numbers[mid];

        // Split it based on the result 
        if (value !== undefined) {

            if (value === 0) {
                high = mid;
            }else{
                // Allow low to reach the same position as high to end the loop
                low = mid + 1;
            }
        }
    }

    const left = numbers[low];

    if (left !== undefined) {
        numberOfZeroes = left === 0 ? size - low : 0;
    }

    return numberOfZeroes;
}; */

console.log("Divide and conquer:");
/* console.log(countZeroes([1,1,1,1,0,0])); // 2 
console.log(countZeroes([1,0,0,0,0])); // 4
console.log(countZeroes([0,0,0])); // 3
console.log(countZeroes([1,1,1,1])); // 0 */

// =======================================================================================================================
// sortedFrequency
//
// Find the size of a subarray from the main array that houses a certain number
// The trick is binary search bounded 
// 
// The lower bound is the size of the array until it hits the value pased by the parameters
// The upper bound is the final 
// 
// Time complexity: O(log n)
// =======================================================================================================================
/* const sortedFrequency = (numbers: number[], frequencyValue: number): number => {

    // Check frequency and size
    let frequency = 0;
    const size = numbers.length;

    // Left position
    let left = 0;
    let lowLeft = 0;
    let lowRight = size;

    if (numbers.length === 0) {
        return -1;
    }

    // Calculate the lowest value using divide and conquer, left side
    while (lowLeft < lowRight) {
        const mid = Math.floor((lowRight + lowLeft) / 2);
        const value = numbers[mid];

        if (value !== undefined) {
            if (value < frequencyValue) {
                lowLeft = mid + 1;
            } else {
                // Make sure low can actually hit the mid number
                lowRight = mid;
            }
        }

        left = lowLeft;
    }

    // Right position
    let right = 0;
    let highLeft = 0;
    let highRight = size;

    while (highLeft < highRight) {
        const mid = Math.floor((highRight + highLeft) / 2);
        const value = numbers[mid];

        // Reverse the logic here as we're checking right hand side.
        if (value !== undefined) {
            if (value > frequencyValue) {
                highRight = mid;
            } else {
                // Make sure low can actually hit the mid number
                highLeft = mid + 1;
            }
        }

        right = highLeft;
    }

    frequency = (right - left);

    return frequency === 0 ? -1 : frequency;
}; */

// =======================================================================================================================
// findRotatedIndex
//
// Find the size of a subarray from the main array that houses a certain number
// The trick is binary search bounded 
// 
// The lower bound is the size of the array until it hits the value pased by the parameters
// The upper bound is the final value
// This works for a sorted array, but isn't the final solution to this problem, but for now it works great 
// 
// Time complexity: O(log n)
// =======================================================================================================================
const findRotatedIndex = (numbers: number[], check: number): number => {

    if (numbers.length === 0) {
        return -1;
    }

    const size = numbers.length;
 
    let left = 0;
    let right = size;
    let mid = Math.floor((right + left) / 2);

    // Handle the left side, return if we have the value at a certain position
    while (left < right) {

        mid = Math.floor((right + left) / 2);

        const value = numbers[mid];

        if (value !== undefined) {

            if (value === check) {
                return mid;
            }

            if (value < check) {
                right = mid;
            } else {
                // Ensure that left and right can eventually meet and exit the loop, otherwise it runs infinite
                left = mid + 1;
            }
        }
    }

    // Reset the left and right values
    left = 0;
    right = size;

    // Move across the right side of the array
    while (left < right) {

        mid = Math.floor((right + left) / 2);
        const value = numbers[mid];

        if (value !== undefined) {

            // if we find the value, return
            if (value === check) {
                return mid;
            }

            if (value > check) {
                right = mid;
            } else {
                left = mid + 1;
            }
        }
    }

    // If we never found the position, return -1
    return -1;
};

console.log("Sorted Frequency: ");
/* console.log(sortedFrequency([1,1,2,2,2,2,3],2)); // 4 
console.log(sortedFrequency([1,1,2,2,2,2,3],3)); // 1
console.log(sortedFrequency([1,1,2,2,2,2,3],1)); // 2 
console.log(sortedFrequency([1,1,2,2,2,2,3],4)); // -1 */
  

console.log("Find Rotated Index: ");
/* console.log(findRotatedIndex([3,4,1,2],4)); // 1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 8)); // 2 
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 3)); // 6
console.log(findRotatedIndex([37,44,66,102,10,22],14)); // -1
console.log(findRotatedIndex([6, 7, 8, 9, 1, 2, 3, 4], 12)); // -1
console.log(findRotatedIndex([11,12,13,14,15,16,3,5,7,9], 16)); // 5 */