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
// factorial
//
// Counts down values until it hits 1, then returns the sum
// It adds the value to each number it reduces as it moves towards to the sum
//
// Time complexity: O(log n)
// =======================================================================================================================
const factorial = (num: number): number => {

  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
};

console.log("Factorial: ");
console.log("For a value of 1: ", factorial(1));
console.log("For a value of 2: ", factorial(2));
console.log("For a value of 3: ", factorial(3));
console.log("For a value of 4: ", factorial(4));

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

// =======================================================================================================================
// Recursion helper function which wraps functionality
//
// Counts down values until it hits 1, then returns the sum
// It adds the value to each number it reduces as it moves towards to the sum
//
// Time complexity: O(log n)
// =======================================================================================================================
const helper = (input: number[]) => {
  if (input.length === 0) {
    return;
  }

  // Check and execute recursion
  if (input[0] !== undefined && input[0] % 2 !== 0) {
    // handle request
    helper(input.slice(1));
  }
};

// =======================================================================================================================
// collectOddValues
//
// Counts down values until it hits 1, then returns the sum
// It adds the value to each number it reduces as it moves towards to the sum
//
// Time complexity: O(n)
// =======================================================================================================================
