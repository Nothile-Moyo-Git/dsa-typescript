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
        return values.reduce((previousState, currentState) => previousState += currentState);
    }

    let max = 0;
    let sum = 0;

    for (let index = 0; index < subArraySize; index++){
        const currentValue = values[index];
        if (currentValue) {
            max += currentValue;
        }
    }

    // Set the sum to the original max so we can start updating it
    // This is our sliding window, we should update it every iteration
    sum = max;

    for (let index = subArraySize; index < values.length; index++) {

            // Check if the current value is worth more than the value at index - size
            // If it's bigger, remove the previous value and add the current
            const currentValue = values[index];
            const previousValue = values[index - subArraySize];

            // We set to undefined here as one of these values could be 0 and I don't want this skipped because of that
            if (currentValue !== undefined && previousValue !== undefined) {

                // Update the sliding window, remove the previous and add the current one for comparison
                sum += currentValue - previousValue;
                console.log("Sum: ", sum);
            }

            // If the current sum is greater than the max, update it
            if (sum > max) {
                max = sum;
            }
    }

    return max;
};

console.log("Max sub array sum: ");
console.log(maxSubArraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)); // 19 max 