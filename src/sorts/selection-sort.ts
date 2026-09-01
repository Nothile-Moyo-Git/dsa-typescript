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

    for (let i = 0; i < size; i++) {

        console.log("Current array: ", result);
        let smallest = i;
        let temp = values[smallest];

        for (let j = i; j < size; j++) {

            const value = values[j];

            console.log("Temp: ", temp);
            console.log("Value: ", value);

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