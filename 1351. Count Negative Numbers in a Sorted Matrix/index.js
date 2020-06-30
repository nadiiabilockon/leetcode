// Given a m * n matrix grid which is sorted in non - increasing order both row - wise and column - wise.

// Return the number of negative numbers in grid.

//     Example 1:

// Input: grid = [[4, 3, 2, -1], [3, 2, 1, -1], [1, 1, -1, -2], [-1, -1, -2, -3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
//     Example 2:

// Input: grid = [[3, 2], [1, 0]]
// Output: 0

// Solution

const countNegatives = (grid) => {
    let count = 0;
    for (let i = 0, len = grid.length; i < len; i++) {
        for (let j = 0, len2 = grid[i].length; j < len2; j++) {
            if (grid[i][j] < 0) {
                count += 1;
            }
        }
    }
    return count;
};