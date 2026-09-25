/**
 * Name: Merge Sort
 * 
 * Sorts by splitting the array in 2's until the array sizes are 0 or 1
 * Once done, start merging them and implement an algorithm to sort them
 * Keep merging them and sorting until the new array has been built
 * 
 * Date created: 23/09/2026
 */

// The type that accompanies every type we may use
type SortableItem = string | number | { name: string, age: number };

// Typing for the comparison function
type Comparitor = <T extends SortableItem>(a : T, b: T) => number;

type Merge = <T extends SortableItem>(a : T[], b : T[]) => T[];

// Generic type that takes 
type SortMethod = <T extends SortableItem>(values: T[], compare?: Comparitor) => T[];

// =======================================================================================================================
// Merge Sort
//
// Receive an array of numbers
// Sort by starting with the second value, then sort on the left hand side
// Continue until completion
// 
// =======================================================================================================================
const mergeArrays: Merge = <T extends SortableItem>(a: T[], b: T[]) => {

    let result: T[] = [];
    const aSize = a.length;
    const bSize = b.length;
    const totalSize = aSize + bSize;

    // Keep our indexes and values so we can track as we check and sort
    let aIndex = 0;
    let bIndex = 0;
    let merged = false;

    let currentSmallest = null;

    if (aSize > 0 || bSize > 0) {
        while (merged === false) {

            let first = a[aIndex];
            let second = b[bIndex];

            console.log("First: ", first);
            console.log("Second: ", second);

            // Compare values, push it into the result, increment the index for either one
            // This allows one full pass of these values
            if (first !== undefined && second !== undefined) {

                // If we have objects, we should compare the ages, otherwise, compare the strings / numbers
                currentSmallest = first < second ? 'a' : 'b';

                if (currentSmallest === 'a') {
                    result.push(first);
                    aIndex++;
                } else {
                    result.push(second);
                    bIndex++;
                }
            }

            // If comparisons are done, we'll do the remaining array values
            // This occurs because one value is undefined as it's completed
            if (first !== undefined && second === undefined) {
                result.push(first);
                aIndex++;
            }
            
            if (second !== undefined && first === undefined) {
                result.push(second);
                bIndex++;
            }

            console.log("CurrentSmallest: ", currentSmallest);

            const resultSize = result.length;
            console.log("Result: ", result);
            console.log("ResultSize: ", resultSize);
            console.log("TotalSize: ", totalSize);
            
            // Once the final array is the size of the two arrays passed in
            // The merge is finished
            if (resultSize >= totalSize) {
                merged = true;
            }  
        }
    }

    return result;

};

const mergeSort = () => {

};

console.log("Merge arrays: ", mergeArrays([1, 2, 7, 8], [3, 4, 5, 6]));