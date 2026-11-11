/**
 * Name: Quick Sort
 * 
 * Description: Another way to sort algorithms, find the smallest number in an array
 * 
 * Date created: 20/10/2026
 */

// =======================================================================================================================
// Quick sort
//
// Works by choosing a random value (pivot), and then moving all smaller values left
// All larger values are moved right, at the ends / beginning of the arrays
//
// Note: If a value on the left is larger than the pivot, append it on the right hand side of the array
// Note: If a value on the right is smaller than the pivot, append it on the left hand side of the array
// Note: This is after values that are already placed there
//
// Seems like you need a value gap of at least 1
//
// That value (pivot) has now been sorted, then repeat the process
//
// The number which is circled, 
//
// [(5), 2, 1, 8, 4, 7, 6, 3]
// [3, 2, 1, 4, 5^, 7, 6, 8]
//
// =======================================================================================================================

// =======================================================================================================================
// Pivot
//
// We pass start and end through as they represent chunks of our original array
//
//
// =======================================================================================================================

const numbers: number[] = [11, 40, 40, 50, 43, 10, 30, 42, 20, 6, 19, 32, 20, 41, 23, 27];
const numbersShort: number[] = [20, 42, 30, 10, 6];
const numbersTiny: number[] = [20, 30, 6];

const pivot = (values: number[], start: number = 0, end: number = values.length - 1, count: number = 0) => {

    console.log("Count: ", count);
    console.log("Start: ", start);
    console.log("End: ", end);
    console.log("End - start", end - start);
    console.log("\n");

    // No point in pivoting when the value is one
    if (end - start <= 0) {
        console.log(">".repeat(50));
        console.log("\n");
        return;
    }

    // For learning Pick the number 11 as the initial pivot
    const chosen = values[start];
    let swapIndex = start;
    let outcome: number[] = [];

    // Swap the values in the array
    const swap = (values: number[], swapIndex: number, currentIndex: number) => {
        const temp = [...values];
        const first = values[swapIndex];
        const second = values[currentIndex];

        console.log("Temp: ", temp);
        console.log("First: ", first);
        console.log("Second: ", second);
        console.log("SwapIndex: ", swapIndex);
        console.log("CurrentIndex: ", currentIndex);

        if (first !== undefined && second !== undefined) {
            temp[swapIndex] = second;
            temp[currentIndex] = first;
        }

        return temp;
    };

    const leapfrog = (values: number[], swapIndex: number) => {

        // Get the swapIndex value, the start value, and swap them
        // The start value is the initial one, so this should work
        const temp = [...values];
        const first = values[start];
        const second = values[swapIndex];

        if (first !== undefined && second !== undefined) {
            temp[start] = second;
            temp[swapIndex] = first;
        }

        return temp;
    };

    console.log("Values: ", values);
    console.log("Starting iterations: ");
    console.log("\n");

    for (let i = start; i <= end; i++) {
        const value = values[i];
        console.log("Index: ", i);
        console.log("Current Value: ", value);
        console.log("Chosen: ", chosen);

        if (value !== undefined && chosen !== undefined) {
            if (chosen > value) {
                console.log("Swapping:");
                swapIndex++;
                outcome = swap(values, swapIndex, i);
                values = outcome;
                console.log("Outcome: ", outcome);
            }
        }

        console.log("-".repeat(50));
    }

    // Move the pivot value into its position through a swap
    console.log("Pre swap: ", values);
    const pivotedValues = leapfrog(values, swapIndex);
    let sortedArray: number[] = [];
    console.log("Leapfrog: ", pivotedValues);

    console.log("\n");
    console.log("=".repeat(50));
    console.log("\n");

    count = count + 1;

    // Pivot left side
    // Pivot right hand side with a max size of 3 for now for testing

    let leftSideValues: number[] = [];
    let rightSideValues: number[] = [];

    if (count <= 12) {
        console.log("Split left: ");

        const leftSplit = pivot(pivotedValues, start, swapIndex - 1, count);
        if (leftSplit !== undefined) {
            leftSideValues = leftSplit;
            sortedArray = leftSplit;
        }


        console.log("Split right: ");
        const rightSplit = pivot(sortedArray, swapIndex + 1, end, count);

        if (rightSplit !== undefined) {
            rightSideValues = rightSplit;
            sortedArray = rightSplit;
        }
    }

    console.log("Count: ", count);
    console.log("Start: ", start);
    console.log("End: ", end);
    console.log("Values: ", values);
    console.log("Left values: ", leftSideValues);
    console.log("Right values: ", rightSideValues);
    // console.log("Returned: ", returned);

    // We'll need to call pivot for the other two halves of the array
    return pivotedValues;
};

// console.log("Pivot: [11, 40, 40, 50, 43, 10, 30, 42, 20, 6, 19, 32, 20, 41, 23, 27]", pivot(numbers));
console.log("Pivot on smaller array [20, 42, 30, 10, 6]: ", pivot(numbersShort));

// Handling the split when there are only two numbers
/* console.log("Pivot and swap on an updated array [6, 10, 20, 42, 30]: ", 
    pivot([6, 10, 20, 42, 30], 3, 4, 1)
); */
