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

const swap = (values: number[], index1: number, index2: number) => {

    // Get the values, swap the array, and return it
    const previous = values[index1];
    const next = values[index2];

    let result: number[] = new Array(...values);

    // Guarding to make sure the swap is possible
    if (previous !== undefined && next !== undefined) {
        result[index1] = next;
        result[index2] = previous;
    }

    console.log("\n");
    console.log("Swap function called");
    console.log("Previous: ", previous);
    console.log("Next: ", next);
    console.log("Values: ", values);
    console.log("Result: ", result);

    return result;
};

const bubbleSort = (values: number[]) => {

    let result:number[] = values;

    // Loop for each number
    for (let i = 0; i < values.length; i++) {

        console.log("First value of I: ", i);

        // Do each pass of the 
        for (let j = i; j < values.length; j++) {
        const previous = values[j];
        const next = values[j + 1];

        console.log("Value of I: ", i);
        console.log("Value of j: ", j);
        console.log("Previous: ", previous);
        console.log("Next: ", next);

            if (previous !== undefined && next !== undefined) {
                if (previous > next) {
                    console.log("Values should swap");
                    console.log(swap(result, i, j + 1));
                }
            }
        }

        console.log("-".repeat(50));
    }
    return values;
};

console.log("Bubble sort:");
console.log(bubbleSort([37, 45, 29, 8]));  // [8, 29, 37, 45]