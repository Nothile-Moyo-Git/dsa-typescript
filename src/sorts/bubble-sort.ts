/**
 * Name: Bubble Sort
 * 
 * Description: A simple way to sort algorithms. It works by taking the first value, comparing it to the next, and then swapping if previous > next
 * It continues until the iteration finishes.
 * 
 * Base case is likely there being no swaps post iteration. The largest values bubble to the top.
 * 
 * Date created: 18/08/2026
 */

/* const swap = (values: number[], index1: number, index2: number) => {

    // Get the values, swap the array, and return it
    const previous = values[index1];
    const next = values[index2];

    let result: number[] = new Array(...values);

    // Guarding to make sure the swap is possible
    if (previous !== undefined && next !== undefined) {
        result[index1] = next;
        result[index2] = previous;
    }

    return result;
};

// =======================================================================================================================
// Bubble Sort
//
// Receive an array of numbers and sort the numbers using bubble sort
// Iterate through the main array and then do an iteration to check all the values
// Make sure you cover all values so that you've finished the sort
// 
// Time complexity: O(n ^ 2) as it needs to iterate squared, worst case
// =======================================================================================================================
const bubbleSort = (values: number[]) => {

    let result:number[] = values;

    // Loop for each number
    for (let i = 0; i < values.length; i++) {

        // Do each pass of the 
        for (let j = 0; j < values.length; j++) {
        const previous = result[j];
        const next = result[j + 1];

            if (previous !== undefined && next !== undefined) {
                if (previous > next) {
                    result = swap(result, j, j + 1);
                }
            }
        }

    }
    return result;
};

console.log("Bubble sort:");
console.log(bubbleSort([37, 45, 29, 8]));  // [8, 29, 37, 45] */

// =======================================================================================================================
// Bubble Sort Exercise (Course)
//
// Same as above but with a different way of approaching the problem
// We'll need to do this for objects with strings inside them
// We'll need 2 parameters being passed through to the method
// 
// Time complexity: O(n^2)
// =======================================================================================================================

// Check two strings and return -1 if the first value is less, 0 if equal, and 1 if the value is more
type bubbleTypes = {
    kitten: {name: string, age: number},
    argument: (a: string | number, b: string | number) => number
};

const compareStrings: bubbleTypes['argument'] = (a, b) => {

    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    
    return 0;
};

const bubbleSortCourse = (values: bubbleTypes['kitten'][], compare: bubbleTypes['argument']) => {

    let result: bubbleTypes['kitten'][] = values;
    const size = result.length;

    // Do our double iterations
    for (let i = 0; i < size; i++) {

        for (let j = 0; j < size; j++) {

            // Get previous and next values for the comparison
            const previous = result[j];
            const next = result[j + 1];

            if (previous !== undefined && next !== undefined) {
                const previousAge = previous.age;
                const nextAge = next.age;

                const swap = compareStrings(previousAge, nextAge);

                // If valid for a swap, do it
                if (swap === 1) {
                    result[j] = next;
                    result[j + 1] = previous;
                }
            }
        }
    }

    return result;
};

let fullKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];

// Sort by age
console.log("Bubble Sort Course Version: ", bubbleSortCourse(fullKittyData, compareStrings));
