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

                if (typeof(first) === 'object' && typeof(second) === 'object') {
                    currentSmallest = first.age > second.age ? 'a' : 'b';
                } else {
                    // If we have objects, we should compare the ages, otherwise, compare the strings / numbers
                    currentSmallest = first < second ? 'a' : 'b';
                }

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

// Recursive function to be called to split and eventually merge the arrays
// It should use two pointers for its time / space compexity
const splitArray = <T extends SortableItem>(values: T[], left: number, right: number, count: number) => {

  const size = values.length;

  // Take right from left as we're finding the medium value
  // So, if left is pos 1, right is pos 3, 3 - 1 = 2 / 2 = 1
  const half = left + Math.floor((right - left) / 2);

  console.log("Count: ", count);
  console.log("Left: ", left);
  console.log("Right: ", right);

  console.log("\n");
  console.log("-".repeat(50));
  console.log("\n");

  // End the loop
  if (right - left <= 1) {
    return;
  }

  if (count === 3) {
    return;
  }

  // Split the array again
  // splitArray(values, left, half);
  splitArray(values, half, right, count + 1)

};
 
// Do a binary search and find the middle value inside it
// If the value you're checking is greater, 

const mergeSort: SortMethod = <T extends SortableItem>(values: T[], compare?: Comparitor) => {

  let result: T[] = values;
  const size = result.length;

  let split = values;
  let currentSplits = 0;
  let currentSplit: T[] = [];
  const maxSplits = size - 1;

  return result;
};

const array1 = [4, 20, 12, 10, 7, 9];
const array2 = [0, -10, 7, 4];
const array3 = [1, 2, 3];
const array4: number[] = [];
const array5 = [4, 3, 5, 3, 43, 232, 4, 34, 232, 32, 4, 35, 34, 23, 2, 453, 546, 75, 67, 4342, 32];
const kitties = ["LilBub", "Garfield", "Heathcliff", "Blue", "Grumpy"];
const moarKittyData = [{
  name: "LilBub",
  age: 7
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 45
}, {
  name: "Blue",
  age: 1
}, {
  name: "Grumpy",
  age: 6
}];

// console.log("Merge arrays: ", mergeArrays([1, 2, 7, 8], [3, 4, 5, 6]));
/* console.log("Merge arrays: ", mergeArrays([{
  name: "LilBub",
  age: 45
}, {
  name: "Garfield",
  age: 40
}, {
  name: "Heathcliff",
  age: 7
}], [{
  name: "Blue",
  age: 21
}, {
  name: "Grumpy",
  age: 6
}, {
  name: "Crusty",
  age: 1
}])); */
// console.log("Merge arrays: ", mergeArrays(["Garfield", "Heathcliff", "LilBub"], ["Blue", "Crusty", "Grumpy",]));

console.log("Split arrays: ", splitArray(array2, 0, array2.length - 1, 0))