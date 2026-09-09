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

        let j = i;
        let sorted = false;
        let smallest = i;

        // Iterate to the left to sort the values
        // This increases with the size of i, will use a while loop for less iterations
        while (sorted === false) {

            const next = result[i];
            const previous = result[j];
            const smallestValue = result[smallest];

            console.log("J: ", j);
            console.log("Previous: ", previous);
            console.log("Next: ", next);

            if (smallestValue !== undefined && previous !== undefined) {
                const less = previous < smallestValue;

                console.log("Greater: ", less);
                if (less === true) {
                    smallest = j;
                }
            }

            console.log("SmallestValue: ", result[smallest]);

            j = j - 1;

            // Conditional to stop the iterations
            if (j < 0) {
                sorted = true; 
            }
        }

        console.log("Smallest: ", smallest);

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