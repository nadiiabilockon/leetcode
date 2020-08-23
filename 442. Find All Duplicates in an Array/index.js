// Given an array of integers, 1 ≤ a[i]≤ n(n = size of array), some elements appear twice and others appear once.
// Find all the elements that appear twice in this array.
// Could you do it without extra space and in O(n) runtime ?

// Example :
// Input:
// [4, 3, 2, 7, 8, 2, 3, 1]

// Output:
// [2, 3]

// Solution

const findDuplicates = (nums) => {
    const numbers = {}, output = [];

    for (let i = 0, len = nums.length; i < len; i++) {
        if (numbers[nums[i]]) {
            numbers[nums[i]] += 1;
        } else {
            numbers[nums[i]] = 1;
        }
    }
    for (let key in numbers) {
        if (numbers[key] > 1) {
            output.push(key)
        }
    }
    
    return output
};