/**
  * Name: Binary Search
  * 
  * Description: Performs a search that iterates through the data object once, but it breaks it down.
  * It uses the divide and conquer 
  * 
  * Date created: 06/08/2026
 */

// =======================================================================================================================
// binarySearch
//
// Iterate through an array of sorted numbers and find a value within it using an algorithm faster than O (n)
// 
// Time complexity: O (log n). It halves each time.
// =======================================================================================================================
/* const binarySearch = (numbers: number[], value: number): number => {

    // Get the middle for binary search. We'll round up for this.
    // Note: There's flexibility here.
    const size = numbers.length;
    const half = size > 1 ? Math.ceil(size / 2) : 0;
    const smallest = numbers[0];
    const highest = numbers[size - 1];
    const middle = numbers[half];

    // Extra guarding to avoid adding the half value unnecessarily
    if (smallest !== undefined && highest !== undefined) {

      if (value < smallest || value > highest) {
        return -1;
      }
    }

    // Compare the middle value to the value passed through. If it's the same, return the index.
    // If greater, slice the left half and call again with the right hand side
    // If lesser, slice the right hand side and call again with the left hand side
    if (middle === value) {
      console.log("Found index at position: ", half);
      return half;
    }

    if (middle !== undefined && size > 1) {

      const left = numbers.slice(0, half);
      const right = numbers.slice(half, size);
      
      console.log("Left: ", left);
      console.log("Right: ", right);

      if (middle > value) {
        return binarySearch(left, value);
      }

      if (middle < value) {
        console.log("Middle is less");
        return half + binarySearch(right, value);
      }
    }

    return -1;
};

console.log("Binary Search: "); */
// console.log(binarySearch([1,2,3,4,5],2)); // 1
// console.log(binarySearch([1,2,3,4,5],5)); // 4
// console.log("Result -1:", binarySearch([1,2,3,4,5],6)); // -1