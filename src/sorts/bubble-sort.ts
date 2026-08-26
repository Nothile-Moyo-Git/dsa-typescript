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
// It also needs to work for arrays of numbers, arrays of strings or the default array of object with numbers inside
// 
// Time complexity: O(n^2)
// =======================================================================================================================

// Check two strings and return -1 if the first value is less, 0 if equal, and 1 if the value is more
type bubbleTypes = {
    kitten: {name: string, age: number},
    argument: (a: string | number, b: string | number) => number
};

type dataTypes = {
    data: bubbleTypes['kitten'] | number | string,
    values: bubbleTypes['kitten'][] | number[] | string[],
    method: (a: bubbleTypes['kitten'] | string | number, b: bubbleTypes['kitten'] | string | number) => number
}

// Compare numbers to strings
const compareNumbers: bubbleTypes['argument'] = (a, b) => {

    if (a < b) {
        return -1;
    } else if (a > b) {
        return 1;
    }
    
    return 0;
};

// Oldest to youngest comparison for the object
const oldestToYoungest: bubbleTypes['argument'] = (a, b) => {
  return b.age - a.age;
}

const bubbleSortCourse = (values: dataTypes['values'], compare?: dataTypes['method']) => {

    let result: dataTypes['values'] = values;
    const size = result.length;

    // Do our double iterations
    for (let i = 0; i < size; i++) {

        for (let j = 0; j < size; j++) {

            // Get previous and next values for the comparison
            const previous = result[j];
            const next = result[j + 1];
            let swap = 0;

            if (previous !== undefined && next !== undefined) {

                let lower: string| number| bubbleTypes['kitten'];
                let higher: string| number| bubbleTypes['kitten'];

                // If it's an object, get the name, otherwise, use the number / string
                if (typeof(previous) === 'object' && typeof(next) === 'object') {
                    lower = previous;
                    higher = next;

                    if (compare) {
                       swap = compare(lower, higher);
                    }
                } 
                
                // Setting our previous and next values
                if ((typeof(previous) === 'string' || typeof(previous) === 'number') 
                    && (typeof(next) === 'string' || typeof(next) === 'number')) {
                    lower = previous;
                    higher = next;

                    swap = compareNumbers(lower, higher);
                }

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


const numsShort = [4, 20, 12, 10, 7, 9];
const numsBasic = [1, 2, 3];
const numsLong = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
const fullKittyData = [{
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
console.log("Bubble Sort Exercises: ");
// console.log("Bubble Sort Course Version: ", bubbleSortCourse(fullKittyData, compareStrings));
// console.log("Bubble Sort Course [4, 20, 12, 10, 7, 9]: ", bubbleSortCourse(numsShort)); // [4, 7, 9, 10, 12, 20]
// console.log("Bubble Sort Course [1, 2, 3]: ", bubbleSortCourse(numsBasic)); // [1, 2, 3]
// console.log("Bubble Sort Course []: ", bubbleSortCourse([])); // []
// console.log("Bubble Sort Course [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32]: ", bubbleSortCourse(numsLong)); // [1, 2, 3][2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
// console.log('Bubble Sort Course: ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"]', bubbleSortCourse(kitties)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
console.log("Bubble Sort Course object array: ", fullKittyData);
