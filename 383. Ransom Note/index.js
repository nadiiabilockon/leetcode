// Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

// Each letter in the magazine string can only be used once in your ransom note.

// Example 1:

// Input: ransomNote = "a", magazine = "b"
// Output: false
// Example 2:

// Input: ransomNote = "aa", magazine = "ab"
// Output: false
// Example 3:

// Input: ransomNote = "aa", magazine = "aab"
// Output: true

// Constraints:

// You may assume that both strings contain only lowercase letters.

// Solution

const canConstruct = (ransomNote, magazine) => {
    return ransomNote.split("").every(function (value) {
        if (magazine.indexOf(value) >= 0) {
            let index = magazine.indexOf(value);
            magazine = magazine.substring(0, index) + magazine.substring(index + 1);
            return true;
        }
    });
};