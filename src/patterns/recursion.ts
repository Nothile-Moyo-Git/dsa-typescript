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
/* const factorial = (num: number): number => {

  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }

  return total;
}; */

/* console.log("Factorial: ");
console.log("For a value of 1: ", factorial(1));
console.log("For a value of 2: ", factorial(2));
console.log("For a value of 3: ", factorial(3));
console.log("For a value of 4: ", factorial(4)); */

// =======================================================================================================================
// sumRange
//
// Counts down values until it hits 1, then returns the sum
// It adds the value to each number it reduces as it moves towards to the sum
//
// Time complexity: O(log n)
// =======================================================================================================================
/* const sumRange = (num: number) : number => {
    if (num === 1) return 1;
    return num + sumRange(num - 1); 
}; */

/* console.log("Sum range: ");
console.log("For a value of 1: ", sumRange(1));
console.log("For a value of 2: ", sumRange(2));
console.log("For a value of 3: ", sumRange(3));
console.log("For a value of 4: ", sumRange(4)); */

// =======================================================================================================================
// Recursion helper function which wraps functionality
//
// Counts down values until it hits 1, then returns the sum
// It adds the value to each number it reduces as it moves towards to the sum
//
// Time complexity: O(log n)
// =======================================================================================================================
/* const helper = (input: number[]) => {
  if (input.length === 0) {
    return;
  }

  // Check and execute recursion
  if (input[0] !== undefined && input[0] % 2 !== 0) {
    // handle request
    helper(input.slice(1));
  }
}; */

// =======================================================================================================================
// collectOddValues
//
// Counts down values until it hits 1, then returns the sum
// It adds the value to each number it reduces as it moves towards to the sum
//
// Time complexity: O(n)
// =======================================================================================================================
/* const collectOddValues = (array: number[]): number[] => {

  const result: number[] = [];

  // Recursive function
  const helper = (input: number[]) => {

    // Return if the array is empty
    if (input.length === 0) {
      return;
    }

    // 
    const value = input[0];
    if (value !== undefined && value % 2 !== 0) {
      result.push(value);
    }

    // Run the recusion
    helper(input.slice(1));
  };

  helper(array);

  return result;
}; */
/* console.log("Collect odd values: ");
console.log("For a value of [1,2,3,4,5]: ", collectOddValues([1,2,3,4,5]));
console.log("For a value of [1,2,3,4,5,6,7,8,9]: ", collectOddValues([1,2,3,4,5,6,7,8,9]));
console.log("For a value of [3,3,3,3]: ", collectOddValues([3,3,3,3]));
console.log("For a value of [4,4,4,4]: ", collectOddValues([4,4,4,4]));
console.log("For a value of []", collectOddValues([])); */

// =======================================================================================================================
// collectOddValues
//
// Counts down values until it hits 1, then returns the sum
// It adds the value to each number it reduces as it moves towards to the sum
//
// This version is pure recursion
//
// Time complexity: O(n)
// =======================================================================================================================
/* const collectOddValuesPure = (array: number[]): number[] => {

  let result = [];

  if (array.length === 0) {
    return array;
  }

  const value = array[0];
  if (value !== undefined) {
    result.push(value);
  }

  result = result.concat(collectOddValues(array.slice(1)));

  return result;
};
console.log("Collect odd values: ");
console.log("For a value of [1,2,3,4,5]: ", collectOddValuesPure([1,2,3,4,5]));
console.log("For a value of [1,2,3,4,5,6,7,8,9]: ", collectOddValuesPure([1,2,3,4,5,6,7,8,9]));
console.log("For a value of [3,3,3,3]: ", collectOddValuesPure([3,3,3,3]));
console.log("For a value of [4,4,4,4]: ", collectOddValuesPure([4,4,4,4]));
console.log("For a value of []", collectOddValuesPure([])); */

// =======================================================================================================================
// power
//
// Create a function that multiples a power by its own exponential based on n times
// Math.pow isn't allowed to be used here
//
// Time complexity: O(n)
// =======================================================================================================================
/* const power = (value: number, exponential:number): number => {

  if (exponential === 0) {
    return 1;
  }

  // Implement the first power
  let result = value;

  // Handles recursion here as need to keep each value throughout the iterations outside the parameters of the function
  const helper = (base: number, currentExponential: number) => {

    if (currentExponential === 0) {
      return;
    }

    // Square the numbers in our helper method
    result *= value;

    // Recursively call the function, we do this because we can't store the result in the parameters
    helper(result, currentExponential - 1);
  }

  helper(value, exponential);

  return result;

};

console.log("Power: ");
console.log("Power of 0: ", power(2, 0)); // 1
console.log("Power of 2: ", power(2, 2)); // 8
console.log("Power of 4: ", power(2, 4)); // 32 */

// =======================================================================================================================
// power
//
// Create a function that multiples a power by its own exponential based on n times
// Math.pow isn't allowed to be used here
//
// Time complexity: O(n)
// =======================================================================================================================
/* const power = (value: number, exponential: number): number => {

  if (exponential === 0) {
    return 1;
  }

  let base = value;

  // Call the power recursively, we need a base case
  if (exponential > 1) {
    base *= power(value, exponential - 1);
  }

  return base;
}; */

/*  console.log("Power: ");
// console.log("Power of 0: ", power(2, 0)); // 1
console.log("Power of 2: ", power(2, 2)); // 4
console.log("Power of 4: ", power(2, 4)); // 16 */

// =======================================================================================================================
// factorial
//
// Create a function that collects the sum of values in a factorial way
// It's the values multiplied by each other, not sums
//
// Time complexity: O(n)
// =======================================================================================================================
/* const factorialChallenge = (value: number): number => {

  // This is our base case, end the factorial here
  if (value === 0) {
    return 1;
  }

  // We return the value + the value - 1 until we 
  return value * factorialChallenge(value - 1);
};

console.log("Factorial: ");
console.log("Factorial 4: ", factorialChallenge(4)); // 24
console.log("Factorial 5: ", factorialChallenge(5)); // 120 */

// =======================================================================================================================
// productOfArray
//
// Get the product of an array which means that each value must be multiplied by the next value
//
// Time complexity: O(n)
// =======================================================================================================================
/* const productOfArray = (values: number[]): number => {

  if (values.length === 0) {
    return 1;
  }

  // Get the initial value and take away the first value from the array
  const value = values[0];
  const trimmed = values.slice(1);

  // Take the first value from the array and multiply it the value returned
  if (trimmed !== undefined && value !== undefined) {
    return value * productOfArray(trimmed);
  }

  return 0;
};
console.log("productOfArray: ");
console.log("[1, 2, 3]: ", productOfArray([1, 2, 3]));
console.log("[1, 2, 3, 10]: ", productOfArray([1, 2, 3, 10])); */

// =======================================================================================================================
// recursiveRange
//
// Get the product of an array which means that each value must be multiplied by the next value
//
// Time complexity: O(n)
// =======================================================================================================================
/* const recursiveRange = (value: number): number => {

  // Base case, return 0 if 0#
  if (value === 0) {
    return 0;
  }

  return value + recursiveRange(value - 1);
};
console.log("Recursive range: ");
console.log("RecursiveRange 6: ", recursiveRange(6)); // 21
console.log("RecursiveRange 10: ", recursiveRange(10)); // 55 */

// =======================================================================================================================
// fib
//
// Accept a value and then return the fibonnaci value for that number
// The fibonacci sequence is a sequence of whole numbers where the next number is the sum of two numbers before it
//
// Best way to remember is to use the mathematical formula in order to calculate it
//
// Time complexity: O(n)
// =======================================================================================================================
/* const fib = (value: number): number => {

  if (value <= 1) {

    // Base case to end the recursion, don't go into negative values as we start with 1
    return value;
  } else {

    // Fib is n -1 + n - 2 since it's the addition of the two previous numbers to create the new one
    return fib(value - 1) + fib(value - 2);
  }

}
console.log("Fibonacci: ");
console.log("Fib (4): ", fib(4)); // 3
console.log("Fib (10): ", fib(10)); // 55
console.log("Fib (28): ", fib(28)); // 317811
console.log("Fib (35): ", fib(35)); // 9227465 */

// =======================================================================================================================
// reverse
//
// Take a string and return the reverse of that string, we do this with one parameter
//
// Time complexity: O(n)
// =======================================================================================================================
/* const reverse = (word: string): string => {

  const size = word.length;

  if (size === 0) {
    return "";
  }
      
  // Generate our empty string we'll add the final value to.
  const finalChar = word[size - 1];

  if (finalChar !== undefined) {

    // Handles both of word concatenation and calls the function
    return finalChar + reverse(word.slice(0, size - 1));
  }

  return "";
}

console.log("Reverse: ");
console.log("Awesome: ", reverse("awesome")); // 'emosewa'
console.log("rithmschool: ", reverse("rithmschool")); // 'loohcsmhtir' */

// =======================================================================================================================
// isPalondrome
//
// Take a string and determine if it is a palindrome by reducing the array size
// We use a pincer method to approach this
//
// Time complexity: O(n)
// =======================================================================================================================
/* const isPalindrome = (word: string): boolean => {
  const size = word.length;

  // If we run out of chars to compare, exit here with true as the base case
  if (size <= 1) {
    return true;
  }

  const left = word[0];
  const right = word[size - 1];

  if (left !== undefined && right !== undefined) {

    // If the letters are different, return a false as it's not a palindrome
    if (left.toLowerCase() !== right.toLowerCase()) {

      // If the letters aren't the same, end the recursion, this is the base case
      return false;
    } else{
      // Remove from both sides so we're checking the final letters equally
      isPalindrome(word.slice(1, size - 1))
    }
  }

  return true;
};

console.log("isPalindrome: ");
console.log("racecar: ", isPalindrome("racecar")); // true
console.log("awesome: ", isPalindrome('awesome')); // false
console.log("foobar: ", isPalindrome('foobar')); // false
console.log("tacocat: ", isPalindrome('tacocat')); // true
console.log("amanaplanacanalpanama: ", isPalindrome('amanaplanacanalpanama')); // true
console.log("amanaplanacanalpandemonium: ", isPalindrome('amanaplanacanalpandemonium')); // false */

// =======================================================================================================================
// someRecursive
//
// A function that accepts an array and a callback which returns true if a case is met
// It iterates through the array and has a case for each value in the array
// =======================================================================================================================
// Initial callback to pass through
/* type recursion = {
  callback: (value: number) => boolean;
};

// Checks the modular result of the value
const isOdd = (value: number): boolean => value % 2 !== 0;

// Function to handle a recursive callback helper function
const someRecursive = (values: number[], callback: recursion['callback']): boolean => {

  const size = values.length;
  let result = false;

  // Return false as a base case
  if (size === 0) {
    return false; 
  }

  const firstValue = values[0];
  if (firstValue !== undefined) {

    // Calculate if the result isOdd, if it is, return true
    result = callback(firstValue);

    if (result === true) {
      return true;
    } else {
      // Call the function recursively until the size is empty, return the result of the function call instead of returning the default which would be false
      // If you want a value returned that isn't the default, return the function itself
      return someRecursive(values.slice(1, size), callback);
    }

  }

  return false;
};

console.log("someRecursive [1,2,3,4]: ", someRecursive([1,2,3,4], isOdd), "\n"); // true
console.log("someRecursive [4,6,8,9]: ", someRecursive([4,6,8,9], isOdd), "\n"); // true
console.log("someRecursive [4,6,8]: ", someRecursive([4,6,8], isOdd), "\n"); // false
console.log("someRecursive [4,6,8]:", someRecursive([4,6,8], val => val > 10)); // false */

// =======================================================================================================================
// flatten
//
// Take an array and flatten the numbers so it turns into a single array
// =======================================================================================================================
/* type NestedArray<T> = (T | NestedArray<T>)[];

const flatten = (values: NestedArray<number>): NestedArray<number> => {

  // Declarations
  const size = values.length;
  const value = values[0];
  const remainder = values.slice(1, size);

  // Array to track our values so we can make a new array
  let outcome: NestedArray<number> = [];

  if (value !== undefined && typeof(value) === 'object') {

    // Deconstruct the value and remainder objects
    return outcome.concat(flatten([...value, ...remainder]));
  }
   
  if (value !== undefined && typeof(value) === 'number') {

    // Push the initial value into the new array, we cannot chain a push and a concat so we handle them separately
    // Add the result returned from flatten into the array we're forming here
    outcome.push(value);

    // The concat here is so that we can 
    return outcome.concat(flatten(values.slice(1, size)));
  }

  return [];
};

console.log("Flatten: ");
console.log("Flatten [1, 2, 3, [4, 5] ]: ", flatten([1,2,3,[4,5]]));
console.log("flatten([1, [2, [3, 4], [[5]]]]): ", flatten([1, [2, [3, 4], [[5]]]]));
console.log("flatten([[1],[2],[3]]): ", flatten([[1],[2],[3]]));
console.log("flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]): ", flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])); */