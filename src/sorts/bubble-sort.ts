/**
 * Name: Bubble Sort
 * 
 * Description: A simple way to sort algorithms. It works by taking the first value, comparing it to the next, and then swapping if previous > next
 * It continues until the iteration finishes
 * 
 * Base case is likely there being no swaps post iteration. The largest values bubble to the top.
 * 
 * Date created: 18/08/2026
 */

const swap = (values: number[], index1: number, index2: number) => {

};

const bubbleSort = (values: number[]) => {
    for (let i = 0; i < values.length; i++) {

        for (let j = i; j < values.length; j++) {
        const previous = values[j];
        const next = values[j + 1];

            if (previous !== undefined && next !== undefined) {
                console.log("Previous: ", previous);
                console.log("Next: ", next);
            }
        }
    }
    return values;
};

console.log("Bubble sort:");
console.log(bubbleSort([37, 45, 29, 8]));  // [8, 29, 37, 45]