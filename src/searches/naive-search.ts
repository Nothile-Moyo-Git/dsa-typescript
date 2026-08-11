/**
  * Name: Naive Search
  * 
  * Description: Performs a search through an array of strings, and then iterating through each string
  * 
  * Date created: 10/08/2026
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

    // Iterate through the string now
    // Use a regular for loop as we're not using an object so we can't use in and we need to track the index of the chars
    let subString = "";
    let subIndex = 0;

    subString = "";
    subIndex = 0;

    for (let index = 0; index < word.length; index++) {
      const subLetter = sub[subIndex];
      const letter = word[index];

      if (subLetter !== undefined && letter !== undefined) {

        if (subLetter === letter) {
          subString += subLetter;
          subIndex++;

          if (subString === sub) {
            count++;
            subString = "";
            subIndex = 0;
          }
        }
      }
    }
  }

  return count;
};

console.log("Naive search: ");
// console.log("String search wowomgzomg, broomghaha (3):", stringSearch(["wowomgzomg", "broomghaha"], "omg")); // 3
// console.log("String search lorie loled, (2):", stringSearch(["lorie loled"], "lo")); // 2