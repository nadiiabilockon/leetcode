// Given an array of strings, group anagrams together.

//     Example:

// Input: ["eat", "tea", "tan", "ate", "nat", "bat"],
//     Output:
// [
//     ["ate", "eat", "tea"],
//     ["nat", "tan"],
//     ["bat"]
// ]
// Note:

// All inputs will be in lowercase.
// The order of your output does not matter.

// Solution

const groupAnagrams = function (strs) {
    const mapping = {}, output = [];
    
    for (let i = 0; i < strs.length; i++) {
        const str = strs[i];
        const sorted = str.split('').sort().join('');

        if (mapping[sorted] === undefined) {
            mapping[sorted] = [str];
        } else {
            mapping[sorted].push(str);
        }
    }

    for (let arr in mapping) {
        output.push(mapping[arr]);
    }

    return output;
};