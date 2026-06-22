 /**
  * Name: Recursion
  * 
  * Description: A file to handle recursion in data structures and algorithms in TypeScript
  * Recursive functions are functions that call themselves until a condition is met
  * They're like while loops
  * 
  * Date created: 19/06/2026
  */

// =======================================================================================================================
// sumRange
//
// Counts down values until it hits 1, then returns the sum
// It adds the value to each number it reduces as it moves towards to the sum
//
// Time complexity: O(log n)
// =======================================================================================================================
const sumRange = (num: number) : number => {
    if (num === 1) return 1;
    return num + sumRange(num - 1); 
};

console.log("Sum range: ");
console.log("For a value of 1: ", sumRange(1));
console.log("For a value of 2: ", sumRange(2));
console.log("For a value of 3: ", sumRange(3));
console.log("For a value of 4: ", sumRange(4));