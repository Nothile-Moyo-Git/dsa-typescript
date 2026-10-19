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

// Type to merge two sorted arrays together
type Merge = <T extends SortableItem>(a : T[], b : T[]) => T[];

// =======================================================================================================================
// merge
// 
// Takes two sorted arrays and merges them, it does this by iterating through both
// As it does so, it creates a new, compares the values, and pushes the smallest until it covers all values
// It then returns the total result
//
// Doesn't modigy the parameters passed to it for this function
// Compare function is added as a parameter but isn't used
//
// =======================================================================================================================
const merge: Merge = <T extends SortableItem>(a: T[], b: T[], compare?: Comparitor) => {

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

            // Compare values, push it into the result, increment the index for either one
            // This allows one full pass of these values
            if (first !== undefined && second !== undefined) {

                // Objects, strings and numbers all use different logic
                if (typeof(first) === 'object' && typeof(second) === 'object') {
                    currentSmallest = first.age > second.age ? 'a' : 'b';
                }

                // We do strings separately as we're sorting by length, not by value
                if (typeof(first) === 'string' && typeof(second) === 'string') {
                  // NOTE: For the course, we do it by length for the assist method
                  // NOTE: For the main one, we do it by value
                  // currentSmallest = (first.length - second.length) <= 0 ? 'a' : 'b';

                  currentSmallest = first < second ? 'a' : 'b';
                }

                if (typeof(first) === 'number' && typeof(second) === 'number') {
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

            const resultSize = result.length;
            
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

  // Get the left, mid, and right numbers so we can iterate through our arrays and merge them into buffer
  let i = left;
  let j = half + 1;
  let count = left;

  let temp: T[] = [];
  temp.length = right - left + 1;

    // Iterate through the arrays whilst the lengths are the same
    // Once you've covered these, then you iterate through remainders
    // Add them to the array
    while (i <= half && j <= right) {
      const first = buffer[i];
      const second = buffer[j];

      if (first !== undefined && second !== undefined) {

        if (typeof(first) === 'object' && typeof(second) === 'object') {

          // Compare the objects
          if (first.age < second.age) {
            buffer[count] = first;
            i++;
          } else {
            buffer[count] = second;
            j++;
          }        

        } else {
  
          if (first < second) {
            temp[count] = first;
            i++;
          } 
          
          if (second < first) {
            temp[count] = second;
            j++;
          }
        }
      }

      count++;
    }

    // If we've still got values left in the first array, then add them to our buffer
    // The positions are pointers we have to the original array, so we can use that
    while (i <= half) {
      const first = buffer[i];

      if (first !== undefined) {
        temp[count] = first;
        i++;
        count++;
      }
    }

    // If we've still got values left in the second array, then add them to our buffer
    // The positions are pointers we have to the original array, so we can use that
    while (j <= right) {
      const second = buffer[j];

      if (second !== undefined) {
        temp[count] = second;
        j++;
        count++;
      }
    }
  

  // Update buffer to the values we have in temp, so we update the whole array, instead of changing values
  // This is because trying to directly update buffer ruins the references
  for (let k = left; k < temp.length; k++) {
    const value = temp[k];

    if (value) {
      buffer[k] = value;
    }
  }

};

// Recursive function to be called to split and eventually merge the arrays
// It should use two pointers for its time / space compexity
const mergeSortOptimal = <T extends SortableItem>(values: T[], left: number, right: number, direction: string, buffer: T[]) => {

  // Take right from left as we're finding the medium value
  // So, if left is pos 1, right is pos 3, 3 - 1 = 2 / 2 = 1
  const half = left + Math.floor((right - left) / 2);

  // End the loop
  if (right - left <= 0) {
    return;
  }

  // Split the array again
  mergeSortOptimal(values, left, half, "left", buffer);
  mergeSortOptimal(values, half + 1, right, "right", buffer);

  // If the values are already sorted, no need to merge the ranges
  const first = values[half];
  const second = values[half + 1];

  // If the values are merged, skip it
  if (first !== undefined && second !== undefined) {
    if (first === second) {
      return;
    }
  }

  mergeRanges(values, left, half, right, buffer);
};

// Merge sort
// This is similar to my example above but it splits the array itself and reassigns it and passes this through
const mergeSort = <T extends SortableItem>(values: T[], compare?: Comparitor) => {


  const left = 0;
  const right = values.length;

  // If our array is empty, return an empty array, this safeguards our request
  if (right === 0) {
    return [];
  }

  // This allows us to only have a minimum size of 1 for our arrays as we do a split below when it's 2
  // We can't split past that
  if (right - left < 2) {
    return;
  }

  // Take right from left as we're finding the medium value
  // So, if left is pos 1, right is pos 3, 3 - 1 = 2 / 2 = 1
  // const half = left + Math.floor((right - left) / 2);
  const half = Math.ceil((right - left) / 2);

  // Split the array between left and right here
  const leftArray = values.slice(left, half);
  const rightArray = values.slice(half, right);

  // Split the array again
  mergeSort(leftArray, compare);
  mergeSort(rightArray, compare);

  // Get the merged arrays, update value to reflect this and then return it
  const outcome = merge(leftArray, rightArray);
  
  for (let i = 0; i < outcome.length; i++) {
    console.log("i: ", i);
    const next = outcome[i];

    if (next !== undefined) {
      values[i] = next;
    }
  }

  // We return here to get the final result of the two merged arrays
  return merge(leftArray, rightArray);
};

// Do a binary search and find the middle value inside it
// If the value you're checking is greater, 
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

console.log("Testing sort: ", mergeSort(moarKittyData));
