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
    method: (values: number[]) => number[] 
}

const selectionSort: sort['method'] = (values) => {

    console.log("Original array: ", values);

    let result: number[] = values;
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
console.log("Selection Sort: ");
console.log("Selection sort: ", array1, selectionSort(array1)); // [4, 7, 9, 10, 12, 20]