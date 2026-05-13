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

// Outputs
console.log("Count unique values");
console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([-2, -1, -1, 0, 1])); // 4

