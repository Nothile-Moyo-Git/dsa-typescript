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

    // Keep our indexes and values so we can track as we check and sort
    let aIndex = 0;
    let bIndex = 0;
    let merged = false;

    let currentSmallest = null;
    let aNextValue = 0;
    let bNextValue = 0;

    if (aSize > 0 || bSize > 0) {
        while (merged === false) {

            let first = a[aIndex];
            let second = b[bIndex];

            console.log("Hello!");

            if (first !== undefined && second !== undefined) {
                currentSmallest = first < second ? 'a' : 'b';
            }

            console.log("CurrentSmallest: ", currentSmallest);
            
            merged = true;
        }
    }

    return result;

};

const mergeSort = () => {

};

console.log("Merge arrays: ", mergeArrays([1, 2, 7, 8], [3, 4, 5, 6]));