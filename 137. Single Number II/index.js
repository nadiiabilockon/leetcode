// Given a non - empty array of integers, every element appears three times except for one, which appears exactly once.Find that single one.

//     Note:

// Your algorithm should have a linear runtime complexity.Could you implement it without using extra memory ?

//     Example 1:

// Input: [2, 2, 3, 2]
// Output: 3
// Example 2:

// Input: [0, 1, 0, 1, 0, 1, 99]
// Output: 99

// Solution

const singleNumber = (nums) => {
    const countedNums = {};

    nums.forEach(element => {
        if (countedNums[element]) {
            countedNums[element] += 1
        } else {
            countedNums[element] = 1
        }
    });

    for (let key in countedNums) {
        if (countedNums[key] === 1) {
            return key
        }
    }
};
