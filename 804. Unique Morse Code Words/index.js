// International Morse Code defines a standard encoding where each letter is mapped to a series of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each letter.For example, "cba" can be written as "-.-..--...", (which is the concatenation "-.-." + "-..." + ".-").We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

//     Example:
// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2
// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".
//     Note:

// The length of words will be at most 100.
// Each words[i] will have length in range[1, 12].
//     words[i] will only consist of lowercase letters.

//Solution

const morse = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--.."
};



const uniqueMorseRepresentations = (words) => {
    const obj = {};

    words.forEach(str => {
        str = str.toLowerCase();
        const lngthofstr = str.split('');
        let answer = '';
        let value = '';

        for (let i in lngthofstr) {
            let key = lngthofstr[i];
            if (morse[key]) {
                answer += morse[key]
                value += lngthofstr[i]
            }
        }
        obj[answer] = value
    })
    
    return Object.keys(obj).length;
};