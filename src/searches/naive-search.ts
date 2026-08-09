/**
  * Name: Naive Search
  * 
  * Description: Performs a search through an array of strings, and then iterating through each string
  * 
  * Date created: 06/08/2026
 */

// =======================================================================================================================
// Naive Search
//
// Receiving an array of strings, iterate through the array, then iterate through each string as a character
// You want to check if a substring of some sort is found in each string in the array
// =======================================================================================================================
const stringSearch = (words: string[], sub: string): number => {

  const size = words.length;
  let count = 0;
  console.log("\n");

  // We need to make sure we actually have a size and guard it
  if (size === 0) {
    return 0;
  }

  // Iterate through the array of strings
  for (const word of words) {
    console.log("Word: ", word);

    // Iterate through the string now
    // Use a regular for loop as we're not using an object so we can't use in and we need to track the index of the chars
    let subString = "";
    let subIndex = 0;

    console.log('─'.repeat(50));
    for (let index = 0; index < word.length; index++) {
      const subLetter = sub[subIndex];
      const letter = word[index];

      if (subLetter !== undefined && letter !== undefined) {
        console.log("Subletter: ", subLetter);
        console.log("Letter: ", letter);
      }
    }

    console.log('─'.repeat(50));
  }

  return 0;
};

console.log("Naive search: ");
console.log("String search wowomgzomg, broomghaha (3):", stringSearch(["wowomgzomg", "broomghaha"], "omg")); // 3