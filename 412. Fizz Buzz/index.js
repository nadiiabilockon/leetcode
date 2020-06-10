// Write a program that outputs the string representation of numbers from 1 to n.
// But for multiples of three it should output “Fizz” instead of the number and for the multiples of five output “Buzz”.For numbers which are multiples of both three and five output “FizzBuzz”.
// Example:

// n = 15,

//     Return:
// [
//     "1",
//     "2",
//     "Fizz",
//     "4",
//     "Buzz",
//     "Fizz",
//     "7",
//     "8",
//     "Fizz",
//     "Buzz",
//     "11",
//     "Fizz",
//     "13",
//     "14",
//     "FizzBuzz"
// ]

//Solution

const fizzBuzz = (n) => {
    const result = [];

    const stringPool = { 3: "Fizz", 5: "Buzz", 8: "FizzBuzz" }

    for (var i = 1; i <= n; i++) {

        let count = 0;
        if (i % 3 == 0) count += 3;
        if (i % 5 == 0) count += 5;

        result.push(count == 0 ? i + "" : stringPool[count]);
    }
    return result
};