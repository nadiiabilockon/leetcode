// Given a string, you need to reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

//     Example 1:
// Input: "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"
// Note: In the string, each word is separated by single space and there will not be any extra space in the string.

// Solution

const reverseWords = (s) => {
    const splited = s.split(' ');

    return splited.map(el => {
        return el.split('').reverse().join('')
    }).join(' ')
};