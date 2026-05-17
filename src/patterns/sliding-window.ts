/**
 * Date created: 16/05/2026
 * 
 * Author: Nothile Moyo
 * 
 * Name: Sliding Windows Pattern
 * 
 * Description: This file showcases the sliding window approach
 * It works by creating a new primitive which holds two positions (like a window) from a separate one.
 * It does this based on conditions given.
 */

// =======================================================================================================================
// Max Sub Array Sum
//
// This challenge is to find the largest sum based on a sub array within a parent array
// It must do this to O(n)
// =======================================================================================================================
const maxSubArraySum = (values: number[], subArraySize: number) => {
    // Make sure our inputs are iterable
    if (values.length === 0) {
        return 0;
    }

    // If it's longer than 0, then get the sum anyway
    if (values.length < subArraySize) {
        const sum: number = values.reduce((previousState, currentState) => previousState += currentState);
        return sum;
    }

    // This allows us to always be able to get the future sum
    const maxIndex = values.length;
    let max = 0;
    let sum = 0;

    for (let index = 0; index < subArraySize; index++){
        const currentValue = values[index];
        if (currentValue) {
            max += currentValue;
        }
    }

    for (let index = 0; index < maxIndex; index++) {
        console.log("Index: ", index);
        console.log("Value: ", values[index]);

        // Get initial max to up sum size
        if (index >= subArraySize) {

            // Check if the current value is worth more than the value at index - size
            // If it's bigger, remove the previous value and add the current
            const currentValue = values[index];
            const previousValue = values[index - subArraySize];

            console.log("Current value: ", values[index]);
            console.log("Previous value: ", values[index - subArraySize]);
            if (currentValue && previousValue && currentValue > previousValue) {
                console.log("Current is larger: ");
                max -= previousValue;
                max += currentValue;
            }
        }
        console.log("Current max: ", max);
        console.log("\n");
    }

    return max;
};

console.log("Max sub array sum: ");
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19 max 