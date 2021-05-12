/******************************************************************************
Write a function intersect(arr1, arr2) that takes in two arrays and returns a
new array containing the elements common to both arr1 and arr2.

Hint: use indexOf

Examples:

intersect(['a', 'b', 'c', 'd'], ['b', 'd', 'e']) => [ 'b', 'd' ]
intersect(['a', 'b', 'c'], ['x', 'y', 'z']) => []
*******************************************************************************/

function intersect(arr1, arr2) 
{
  let retVal;

  if (arr1.length > arr2.length)
  {
    retVal = arr1.filter((element) => arr2.includes(element));
  }
  else
  {
    retVal = arr2.filter((element) => (arr1.includes(element)))
  }
  return retVal;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = intersect;
