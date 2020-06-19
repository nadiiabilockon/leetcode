// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, find the one that is missing from the array.

//     Example 1:

// Input: [3, 0, 1]
// Output: 2
// Example 2:

// Input: [9, 6, 4, 2, 3, 5, 7, 0, 1]
// Output: 8

// Solution

const missingNumber = (nums) => {
    const res = new Array(nums.length + 1).fill(-1);

    for (const num of nums) {
      res[num] = num;
    }

    return res.indexOf(-1);
};