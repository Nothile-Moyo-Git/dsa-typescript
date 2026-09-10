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

type sort = {
    params: number[] | string[];
    object: { name: string, age: number };
    compare: (a: {name: string, age: number} | string, b: {name: string, age: number} | string) => number;
    method: (values: sort['params'] | sort['object'][], compare?: sort['compare']) => sort['params'] | sort['object'][];
}

const insertionSort: sort['method'] = (values, compare?: sort['compare']) => {

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

        const initial = result[smallest];
        const toSwap = result[i];

        if (smallest < i && smallestValue !== undefined && next !== undefined) {
            result[smallest] = next;
            result[i] = smallestValue;
        }

        console.log("Updated results: ", result);

        console.log("\n");
        console.log("-".repeat(50));
        console.log("\n");
    }

    return result;
};

const array1 = [4, 20, 12, 10, 7, 9];

console.log("Insertion sort: ");
console.log("");
insertionSort(array1); // [4, 7, 9, 10, 12, 20]