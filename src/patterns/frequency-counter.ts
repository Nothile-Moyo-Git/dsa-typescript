/**
 * Date created: 07/05/2026
 * 
 * Author: Nothile Moyo
 * 
 * Name: Frequency Counter Pattern
 * 
 * Description: This file showcases the frequency counter approach
 * It does so by iterating through a list, and then proceeding to count the frequency of each node in a hashmap
 */

// ==================================================================================
// Anagram
//
// An anagram is a word or phrase that can have the letters re-arranged
// ==================================================================================

type ANAGRAM = {
    method: (firstString: string, secondString: string) => boolean
};

const isAnagram: ANAGRAM['method'] = (firstString, secondString) => {

    if (firstString.length !== secondString.length) {
        return false;
    }

    let success = true;

    // Set hashmaps for frequency counters
    const firstCharCounter: Record<string, number> = {};
    const secondCharCounter: Record<string, number> = {};

    for (const char of firstString.toLowerCase()) {
        firstCharCounter[char] = (firstCharCounter[char] || 0) + 1;
    }

    for (const char of secondString.toLowerCase()) {
        secondCharCounter[char] = (secondCharCounter[char] || 0) + 1;
    }

    // Checks that the frequencies are the same, otherwise, the function fails
    for (const char in firstCharCounter) {
        if (firstCharCounter[char] !== secondCharCounter[char]) {
            success = false;
        }
    }

    return success;
};

console.log("Frequency counter pattern");
console.log("Anagram:")
console.log(isAnagram("", "")); // True
console.log(isAnagram("aaz", "zza")); // False
console.log(isAnagram("anagram", "nagaram")); // True
console.log(isAnagram("rat", "car")); // False
console.log(isAnagram("awesome", "awesom")); // False
console.log(isAnagram("qwerty", "qeywrt")); // True
console.log(isAnagram("texttwisttime", "timetwisttext")); // True

console.log("\n\n");