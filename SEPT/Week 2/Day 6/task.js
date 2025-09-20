// function isPalindrome(s) {
//   let reversed = s.split("").reverse().join("");
//   return s === reversed ? 1 : 0;
// }

// // Example
// console.log(isPalindrome("abba")); // 1
// console.log(isPalindrome("abc"));  // 0












// let arr = ["item 3", "item 2", "item 1", "item 7", "item 5"];

// arr.sort((a, b) => {
//   // Extract numbers and compare
//   let numA = parseInt(a.split(" ")[1]);
//   let numB = parseInt(b.split(" ")[1]);
//   return numA - numB;
// });

// console.log(arr);
// // [ 'item 1', 'item 2', 'item 3', 'item 5', 'item 7' ]












// const s = "apple,banana,cherry";
// const arr = s.split(",");

// console.log(arr);
// // [ 'apple', 'banana', 'cherry' ]











// const s1 = "hello world, hello JavaScript!";

// const count = {};

// // Loop through each character
// for (let char of s1) {
//     if (char !== " " && char !== "," && char !== "!") { // skip spaces & punctuation
//         count[char] = (count[char] || 0) + 1;
//     }
// }

// // Print result
// for (let key in count) {
//     console.log(`${key} → ${count[key]} times`);
// }
