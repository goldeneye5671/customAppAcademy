/*

Write a function `sumWithReduce(nums)` that takes in an array of numbers.
The function should return the total sum of all numbers in the array.

Solve this using Array's `reduce()` method.

Examples:

console.log(sumWithReduce([10, 3, 5, 2])); // 20
console.log(sumWithReduce([])); // 0

*/


// your code here


let sumWithReduce = (numbers) => 
{
  if (!Array.isArray(numbers)){
    return [];
  }
  
  if (numbers.length <= 0) { 
    return [];
  }
  
  return numbers.reduce((total, number) => total += number);
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = sumWithReduce;
} catch (e) {
  module.exports = null;
}
