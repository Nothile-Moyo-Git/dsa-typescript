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

// 
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

// Merge the two arrays into one and return the value
const mergeRanges = <T extends SortableItem>(values: T[], left: number, half: number, right: number, buffer: T[]) => {

  console.log("\n");
  console.log("Merge ranges called");

  console.log("Left: ", left);
  console.log("Mid: ", half);
  console.log("Right: ", right);

  // Get the left, mid, and right numbers so we can iterate through our arrays and merge them into buffer
  let i = left;
  let j = right;
  let count = left;

  // Let's do this simply for values 0, 0, 1 as an example
  // TODO: Update this to cover other use cases
    console.log("Testing variation");

    // Iterate through the arrays whilst the lengths are the same
    // Once you've covered these, then you iterate through remainders
    // Add them to the array
    while (i <= half && j <= right) {
      const first = values[i];
      const second = values[j];

      if (first !== undefined && second !== undefined) {
        console.log("Values to compare: ");
        console.log("First: ", first);
        console.log("Second: ", second);

        if (first < second) {
          buffer[count] = first;
          i++;
        } else {
          console.log("Update second called");
          buffer[count] = second;
          j++;
        }
      }

      count++;
    }

    // If we've still got values left in the first array, then add them to our buffer
    // The positions are pointers we have to the original array, so we can use that
    while (i <= half) {
      const first = values[i];

      if (first !== undefined) {
        console.log("Update remainder second called");
        console.log("Second: ", first);
        buffer[count] = first;
        i++;
        count++;
      }
    }

    // If we've still got values left in the second array, then add them to our buffer
    // The positions are pointers we have to the original array, so we can use that
    while (j <= right) {
      const second = values[j];

      if (second !== undefined) {
        console.log("Update remainder second called");
        console.log("Second: ", second);
        buffer[count] = second;
        j++;
        count++;
      }
    }
  

  console.log("Buffer: ", buffer);
 
  console.log("\n");

};

// Recursive function to be called to split and eventually merge the arrays
// It should use two pointers for its time / space compexity
const splitArray = <T extends SortableItem>(values: T[], left: number, right: number, direction: string, buffer: T[]) => {

  const size = values.length;

  console.log("Direction: ", direction);
  console.log("Left before: ", left);
  console.log("Right before: ", right);

  // Take right from left as we're finding the medium value
  // So, if left is pos 1, right is pos 3, 3 - 1 = 2 / 2 = 1
  const half = left + Math.floor((right - left) / 2);

  console.log("Left after: ", left);
  console.log("Right after: ", right);

  console.log("\n");
  console.log("-".repeat(50));
  console.log("\n");

  // End the loop
  if (right - left <= 0) {
    return;
  }

  // Split the array again
  splitArray(values, left, half, "left", buffer);
  splitArray(values, half + 1, right, "right", buffer);

  mergeRanges(values, left, half, right, buffer);
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

let buffer = [...array2];

console.log("Split arrays: ", splitArray(array2, 0, array2.length - 1, "neither", buffer))