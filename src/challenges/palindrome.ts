/**
 * Date created: 11/05/2026
 * 
 * Author: Nothile Moyo
 * 
 * Name: Palindrome
 * 
 * Description: This is an exercise to check if a string is a palindrome to time complexity O(n
 * )
 */

const isPalindrome = (text: string) : boolean => {

    // Get the length of the string and then ignore the remainder for odd length string
    const iteratorLength = Math.floor(text.length / 2);
    const palindrome = text.toLowerCase();

    let success = true;

    // If any of the values are different 
    for (let index = 0; index < iteratorLength; index++) {
        const reverseChar = palindrome[palindrome.length - index - 1];

        if (palindrome[index] !== reverseChar) {
            success = false;
        }
    }

    return success;
};

console.log("Palindrome");
console.log(isPalindrome("racecar")); // True
console.log(isPalindrome("deed")) // True
console.log(isPalindrome("fish")); // False