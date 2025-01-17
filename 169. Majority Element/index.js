// Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

// You may assume that the array is non-empty and the majority element always exist in the array.

// Example 1:

// Input: [3,2,3]
// Output: 3
// Example 2:

// Input: [2,2,1,1,1,2,2]
// Output: 2

//Solution

const majorityElement = (nums) => {
    const numbers = {};
    const majorityTimes = nums.length / 2;
    
    for (let i = 0, len = nums.length; i < len; i++) {
        if (numbers[nums[i]]) {
            numbers[nums[i]] += 1;
        } else {
            numbers[nums[i]] = 1;
        }
    }

    for (const key in numbers) {
        if (numbers[key] > majorityTimes) {
            return +key
        }
    }
};