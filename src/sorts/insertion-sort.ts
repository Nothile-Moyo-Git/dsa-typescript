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

type sort = {
    params: number[] | string[];
    object: { name: string, age: number };
    compare: (a: {name: string, age: number} | string, b: {name: string, age: number} | string) => number;
    method: (values: sort['params'] | sort['object'][], compare?: sort['compare']) => sort['params'] | sort['object'][];
}


// Todo, define a type that contains everything
// Use a generic type that extends it and contains the relevant typing
const insertionSort = (values, compare?: sort['compare']) => {

    // Get values to handle the iteration
    let result = values;
    const size = result.length;

    console.log("Values: ", values);
    console.log("Size: ", size);

    // Iterate to the right
    for (let i = 1; i < size; i++) {

        console.log("I: ", i);
        console.log("Result: ", result);

        // Variables that we can update
        // We start with both values, and we update them when we find the lowest value
        // The initial lowest is the current value in the array until it's replaced
        let j = i;
        let sorted = false;
        let smallest = i;
        let smallestValue = result[smallest];
        let previous = result[j];

        const next = result[i];

        // Iterate to the left to sort the values
        // This increases with the size of i, will use a while loop for less iterations
        while (sorted === false) {

            previous = result[j];

            console.log("J: ", j);
            console.log("Previous: ", previous);
            console.log("Next: ", next);

            if (smallestValue !== undefined && previous !== undefined && next !== undefined) {
                // Turn true until we reach a point where our previous value is no longer greater than the next
                const less = next < previous;

                console.log("Less: ", less);
                if (less === true) {
                    // Update the index and the value that we'll return if it's the lowest
                    smallest = j;
                    smallestValue = result[j];
                }
            }

            console.log("SmallestValue: ", result[smallest]);

            j = j - 1;

            // Continue until we've checked the required number of values
            if (j < 0) {
                sorted = true; 
            }
        }

        console.log("Smallest after: ", smallest);
        console.log("smallestValue current: ", smallestValue);
        console.log("SmallestValue after: ", result[smallest]);

        if (smallest < i && next !== undefined) {

            // We're going to do two splices to swap the values properly
            // Place it in the position we want to position it in, then do one to delete it from the old position
            if (typeof(next) === 'object' || typeof(next) === 'number') {
                result.splice(smallest, 0, next);
                result.splice(i + 1, 1);
            }
        }

        console.log("Updated results: ", result);

        console.log("\n");
        console.log("-".repeat(50));
        console.log("\n");
    }

    return result;
};

const array1 = [4, 20, 12, 10, 7, 9];
const array2 = [0, -10, 7, 4];
const array3 = [1, 2, 3];
const emptyArray = [];
const largeArray = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
const strings = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

console.log("Insertion sort: ");
// console.log("Insertion sort [4, 20, 12, 10, 7, 9]: ", insertionSort(array1)); // [4, 7, 9, 10, 12, 20]
// console.log("Insertion sort [0, -10, 7, 4]: ", insertionSort(array2)); // [-10, 0, 4, 7]
// console.log("Insertion sort [1, 2, 3]: ", insertionSort(array3)); // [1, 2, 3]
// console.log("Insertion sort []: ", insertionSort([])); // []
// console.log("Insertion sort large array []: ", insertionSort(largeArray)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log("Insertion sort large array []: ", insertionSort(strings));