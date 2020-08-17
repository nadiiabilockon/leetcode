// Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Note that an empty string is also considered valid.

// Example 1:

// Input: "()"
// Output: true
// Example 2:

// Input: "()[]{}"
// Output: true
// Example 3:

// Input: "(]"
// Output: false
// Example 4:

// Input: "([)]"
// Output: false
// Example 5:

// Input: "{[]}"
// Output: true

// Solution

const isValid = (s) => {
    if (!s || s.length == 0) return true;
    
    const stack = [], len = s.length;

    for (let i = 0; i < len; i++) {
        let bracket = s[i];

        if (bracket === '(') {
            stack.push(')')
        }
        else if (bracket === '{') {
            stack.push('}')
        }
        else if (bracket === '[') {
            stack.push(']')
        }
        else if (stack.pop() !== bracket) return false;
    }
    return stack.length === 0;
};