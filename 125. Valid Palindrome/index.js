// Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

// Note: For the purpose of this problem, we define empty string as valid palindrome.

// Example 1:

// Input: "A man, a plan, a canal: Panama"
// Output: true
// Example 2:

// Input: "race a car"
// Output: false

// Constraints:
// s consists only of printable ASCII characters.

// Solution

const isPalindrome = (s) => {
    const str = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    const len = str.length;

    for (let i = 0, j = len - 1; i < j; i++, j--) {
        if (str[i] !== str[j]) {
            return false
        }
    }

    return true
};