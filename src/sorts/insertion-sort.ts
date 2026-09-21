/**
 * Name: Insertion Sort
 * 
 * Description: Another way to sort algorithms, find the smallest number in an array
 * 
 * Selection sort starts with the initial value, then compares the values and stores the index of the lowest value
 * At the end of the loop, reassign temporary to the next number and continue
 * 
 * Date created: 30/08/2026
 */

// =======================================================================================================================
// Insertion Sort
//
// Receive an array of numbers
// Sort by starting with the second value, then sort on the left hand side
// Continue until completion
// 
// =======================================================================================================================

// The type that accompanies every type we may use
type SortableItem = string | number | { name: string, age: number };

// Typing for the comparison function
type Comparitor = <T extends SortableItem>(a : T, b: T) => number;

// Generic type that takes 
type SortMethod = <T extends SortableItem>(values: T[], compare?: Comparitor) => T[];

// Function to compare strings, this will be passed through the compare argument
const strComp: Comparitor = (a, b) => {
    if (a < b) { return -1;}
    else if (a > b) { return 1;}
    return 0;
};

const oldestToYoungest: Comparitor = (a, b) => {

    // Ensure it's an object so we can reference parameters despite being a generic
    if (typeof(a) === 'object' && typeof(b) === 'object') {
        return b.age - a.age
    }

    return 0;
};

// Todo, define a type that contains everything
// Use a generic type that extends it and contains the relevant typing
const insertionSort: SortMethod = (values, compare) => {

    // Get values to handle the iteration
    let result = values;
    const size = result.length;

    // Iterate to the right
    for (let i = 1; i < size; i++) {

        // Variables that we can update
        // We start with both values, and we update them when we find the lowest value
        // The initial lowest is the current value in the array until it's replaced
        let j = i;
        let sorted = false;
        let smallest = i;
        let previous = result[j];

        const next = result[i];

        // Iterate to the left to sort the values
        // This increases with the size of i, will use a while loop for less iterations
        while (sorted === false) {

            previous = result[j];

            // Handle for values. We do different comparisons because of the methods used to compare
            if (previous !== undefined && next !== undefined) {

                // Numbers
                if (typeof(previous) === 'number' && typeof(next) === 'number') {
                    // Turn true until we reach a point where our previous value is no longer greater than the next
                    // We only need to do this check because we're starting from position 1 and it sorts from there
                    if (next < previous) {
                        // Update the index and the value that we'll return if it's the lowest
                        smallest = j;
                    }
                }

                // Strings
                if (typeof(previous) === 'string' && typeof(next) === 'string') {
                    if (compare) {
                        const outcome = compare(previous, next);

                        if (outcome === 1) {
                            // Update the index and the value that we'll return if it's the lowest
                            smallest = j;
                        }
                    }
                }

                // Objects
                if (typeof(previous) === 'object' && typeof(next) === 'object') {

                    if (compare) {
                        const outcome = compare(previous, next);

                        if (outcome > 0) {
                            smallest = j;
                        }

                    }
                }
            }

            j = j - 1;

            // Continue until we've checked the required number of values
            if (j < 0) {
                sorted = true; 
            }
        }

        if (smallest < i && next !== undefined) {

            // We're going to do two splices to swap the values properly
            // Place it in the position we want to position it in, then do one to delete it from the old position
            result.splice(smallest, 0, next);
            result.splice(i + 1, 1);
            
        }

    }

    return result;
};

// Teacher example
// In this example, we go backwards, not forwards as I've done in mine
const insertionSortExample: SortMethod = (arr, compare) => {

    console.log("Insertion sort [2, 1, 9, 76, 4]: ");

    const size = arr.length;
    const result = arr;

    // Execute the initial loop, starting at the first value
    for (let i = 1; i < size; i++) {

        const currentValue = result[i];
        let replaceIndex = i - 1;
        let shouldSwap = false;

        // This is the backwards loop, similar to how I did it
        for (let j = i - 1; j >= 0; j--) {

          const previous = arr[j];

          // Do the comparisons for strings or numbers
          if (!compare) {
            console.log("\n");
            console.log("Current value: ", currentValue);
            console.log("Previous: ", previous);

            // Check if the current value is greater than the previous one
            // If true, move values to the right
            if (previous !== undefined && currentValue !== undefined) {
              
              if (previous > currentValue) {

                // Move values to the right
                shouldSwap = true;
                result[j + 1] = previous;
                replaceIndex = j;
              }
            }
          }

          // If you have a compare function, use that instead

          // Documentation
          console.log("\n");
          console.log("ReplaceIndex: ", replaceIndex);
          console.log("Current value: ", currentValue);
          console.log("Current result: ", result);
        }

        if (currentValue !== undefined && shouldSwap === true) {
          result[replaceIndex] = currentValue;
        }

        console.log("Updated result: ", result);
        console.log("-".repeat(50));
    }

    return result;
}

const array1 = [4, 20, 12, 10, 7, 9];
const array2 = [0, -10, 7, 4];
const array3 = [1, 2, 3];
const emptyArray = [];
const largeArray = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
const strings = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
const moarKittyData = [{
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

console.log("Insertion sort: ");
// console.log("Insertion sort [4, 20, 12, 10, 7, 9]: ", insertionSort(array1)); // [4, 7, 9, 10, 12, 20]
// console.log("Insertion sort [0, -10, 7, 4]: ", insertionSort(array2)); // [-10, 0, 4, 7]
// console.log("Insertion sort [1, 2, 3]: ", insertionSort(array3)); // [1, 2, 3]
// console.log("Insertion sort []: ", insertionSort([])); // []
// console.log("Insertion sort large array []: ", insertionSort(largeArray)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
// console.log("Insertion sort large array []: ", insertionSort(strings, stringCompare)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
// console.log("Insertion sort large array []: ", insertionSort(moarKittyData, oldestToYoungest)); // ["Blue", "Garfield", "Grumpy", "Heathcliff", "LilBub"]
/* [{
  name: "Blue",
  age: 1
},{
  name: "Grumpy",
  age: 6
},{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}]; */

// Teacher example
const learningArray = [2, 1, 9, 76, 4];
console.log("Insertion sort [2, 1, 9, 76, 4]: ", insertionSortExample(learningArray));
