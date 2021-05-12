/*

Write a function `maxWithReduce(nums)` that takes in an array of numbers.
The function should return the largest number of the array.

You can assume that the array will not be empty.

Solve this using Array's `reduce()` method.

Examples:

console.log(maxWithReduce([4, 6, 3, 5, 42, 4])); // 42
console.log(maxWithReduce([-2, -3, -7, 3])); // 3

*/


// your code here

let maxWithReduce = (numbers) => 
{
  if (!Array.isArray(numbers)) return [];
  if (numbers.length <= 0) return [];
  numbers.sort((a, b) => {if (a < b){return -1}else{return 1}});
  return numbers[numbers.length-1];
}



/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = maxWithReduce;
} catch (e) {
  module.exports = null;
}
