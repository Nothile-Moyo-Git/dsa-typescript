/**
 * Date created: 13/05/2026
 * 
 * Author: Nothile Moyo
 * 
 * Name: Multiple pointers pattern
 * 
 * Description: This file showcases the multiple approach
 * It does do by starting with two pointers in an iterative data structure, and moving across the structure until it's covered
 * This approach has the advantage of improving both time and space complexity
 */

// =======================================================================================================================
// Count unique values
//
// This challenge is to iterate through an array and find all the unique values
// Time complexity should be O(n) for this
// For this example, the array is already sorted
// =======================================================================================================================
const countUniqueValues = (values: number[]) : number => {

    if (values.length === 0) {
        return 0;
    }

    const max = values.length - 1;
    let start = 0;
    let finish = max;
    let uniqueValues = 0;

    while(start < finish) {
        let isPreviousValue = false;

        // Check if the next value is the same as the current value
        if (finish < max && values[finish] === values[finish + 1]) {
            isPreviousValue = true;
        }

        // If the finish value is not the same as the next value and not the same as the current
        // Increment the counter
        if (values[start] !== values[finish]) {
            if (!isPreviousValue) {
                uniqueValues++;
            }

            finish--;
        }

        if (values[start] === values[finish]) {
            uniqueValues++;
            finish = 0;
        }
    }

    return uniqueValues;
};

// =======================================================================================================================
// Multiple pointers
//
// This challenge is to use the current array and update it to get the unique values in that
// Then we can use the index position and return it
// =======================================================================================================================
const multiplePointers = (values: number[]) : number => {

    if (values.length === 0) {
        return 0;
    }

    if (values.length === 1) {
        return 1;
    }

    const max = values.length;
    let firstPointer = 0;

    for (let index = 1; index < max; index++) {

        // If the second value is different from the first, move forward
        if (values[firstPointer] !== values[index]) {
            firstPointer++;

            // We need to make sure this value exists if we're to set it
            const value = values[index];
            if (value !== undefined) {
                values[firstPointer] = value;
            }
        }
    }

    // Increment based on index position
    return firstPointer += 1;
};

// Outputs
/*
console.log("Count unique values");
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4
*/

console.log("\n\n");

console.log("Multiple pointers");
console.log(multiplePointers([1, 1, 1, 1, 1, 2])); // 2
console.log(multiplePointers([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(multiplePointers([])); // 0
console.log(multiplePointers([-2, -1, -1, 0, 1])); // 4

