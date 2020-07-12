// Given a string s consists of upper / lower -case alphabets and empty space characters ' ', return the length of last word(last word means the last appearing word if we loop from left to right) in the string.

// If the last word does not exist, return 0.

// Note: A word is defined as a maximal substring consisting of non - space characters only.

// Example:

// Input: "Hello World"
// Output: 5

// Solution 1

const lengthOfLastWord = (s) => {
    let counter = 0;

    while (s.charAt(s.length - 1) === ' ') {
        s = s.substring(0, s.length - 1);
    }

    for (i = s.length - 1; i >= 0; i--) {
        if (s.charAt(i) === ' ') return counter;
        counter++;
    }
    return counter;
};

// Solution 2

const lengthOfLastWord = (s) => {
    const words = s.split(' ');
    const len = words.length;

    return words[len - 1] ? words[len - 1].length : 0
};