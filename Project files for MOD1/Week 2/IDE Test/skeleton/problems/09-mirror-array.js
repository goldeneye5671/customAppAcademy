/***********************************************************************
Write a function `mirrorArray(array)` that takes in an array as an
argument and returns a new array "mirrored" as shown in the examples:

Examples:

mirrorArray([1,2,3]); // => [ 1, 2, 3, 3, 2, 1 ]
mirrorArray(['a', 'b', 'c', 'd']); // => [ 'a', 'b', 'c', 'd', 'd', 'c', 'b', 'a' ]
***********************************************************************/

function mirrorArray(array) 
{
  //copying the original array
  let originalArray = [...array];
  //setting up an array to be reversed
  let reversedArray = [...array];
  //reversing that array
  reversedArray.reverse();
  //combining both arrays together into the original array
  //NOTE THAT THE ORIGINAL ARRAY IS NOT CHANGED!!
  return originalArray.concat(reversedArray)
  
}

console.log(mirrorArray([1, 2, 3]))

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
module.exports = mirrorArray;
