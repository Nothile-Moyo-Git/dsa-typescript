/**
 * Name: Selection Sort
 * 
 * Description: Another way to sort algorithms, find the smallest number in an array
 * 
 * Selection sort starts with the initial value, then compares the values and stores the index of the lowest value
 * At the end of the loop, reassign temporary to the next number and continue
 * 
 * Date created: 30/08/2026
 */

// =======================================================================================================================
// Selection Sort
//
// Receive an array of numbers
// Set a value to temp (initial) and compare it to other numbers
// Keep the index of the smallest value
// Move the value left
// 
// Time complexity: O(n ^ 2) as it needs to iterate squared, worst case
// =======================================================================================================================

type sort = {
    params: number[] | string[];
    method: (values: number[]| string[]) => sort['params'];
}

const selectionSort: sort['method'] = (values) => {

    console.log("Original array: ", values);

    let result: sort['params'] = values;
    const size = values.length;

    // Loop through both iterations
    for (let i = 0; i < size; i++) {

        console.log("Current array: ", result);
        let smallest = i;
        let temp = values[smallest];

        // Start here as a sorted value doesn't need to be evaluated and we gain performance
        for (let j = i; j < size; j++) {

            const value = values[j];

            console.log("Temp: ", temp);
            console.log("Value: ", value);

            // Store our temporary values so we only do one replacement at a time
            // This is NOT bubble sort, so that's why
            if (temp !== undefined && value !== undefined) {
                if (temp > value) {

                    temp = value;
                    smallest = j;
                }
            }

            console.log("\n");
        }

        console.log("i: ", i);
        console.log("Temp after: ", temp);
        console.log("Index: ", smallest);

        const smallestValue = result[smallest];
        const originalValue = result[i];

        // Do the swap here, we swap the smallest value with i if it's able to do so
        // This way, we find the smallest value, and then replace the value at position i with it
        if (smallest > i && smallestValue !== undefined && originalValue !== undefined) {
            result[i] = smallestValue;
            result[smallest] =  originalValue;
        }

        console.log("-".repeat(50));
    }

    return result;
};

const array1 = [4, 20, 12, 10, 7, 9];
const array2 = [0, -10, 7, 4];
const array3 = [1, 2, 3];
const array4: number[] = [];
const array5 = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];

console.log("Selection Sort: ");
// console.log("Selection sort: [4, 20, 12, 10, 7, 9] ", array1, selectionSort(array1)); // [4, 7, 9, 10, 12, 20]
// console.log("Selection sort: [0, -10, 7, 4] ", array2, selectionSort(array2)); // [-10, 0, 4, 7]
// console.log("Selection sort: [1, 2, 3] ", selectionSort(array3)); // [1, 2, 3]
// console.log("Selection sort: [] ", selectionSort(array4)); // []
// console.log("Selection sort: [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32] ", selectionSort(array5)); // [2, 3, 3, 4, 4, 4, 5, 23, 32, 32, 34, 34, 35, 43, 67, 75, 232, 232, 453, 546, 4342]
console.log('Selection sort: ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"]', selectionSort(kitties));