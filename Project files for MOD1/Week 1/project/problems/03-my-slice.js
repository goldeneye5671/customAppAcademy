/*
    mySlice()
    Write a function that takes an array and two numbers. The function should behave like
    Javascript's built-in Array#slice method and return a new array with only elements between
    the indices of the two numbers passed in. The first number is inclusive and the second is exclusive.
    If the first number is less than 0 the function should return a slice of the array from the beginning
    and if the second number is greater than the length of the array it should return a slice up to the end
    of the array

    If no end index is passed as the third argument, the function should slice up to the end of the array.

    See examples below:

    console.log(mySlice([1, 2, 3], 0, 2)) // prints [1, 2]
    console.log(mySlice([1, 2, 3], 0, 4)) // prints [1, 2, 3]
    console.log(mySlice([1, 2, 3], -1, 2)) // prints [1, 2]
    console.log(mySlice([1, 2, 3], 1, 0)) // prints []
    console.log(mySlice([1, 2, 3], 0)) // prints [1, 2, 3]
    console.log(mySlice([1, 2, 3], 1)) // prints [2, 3];
*/

function mySlice(arr, start, end = arr.length) 
{
    let retVal = [];
    
    //if the first number is less than zero, start at the beginning of the arr
    //if the last number is greater than the length of the arr, go to the length of the arr
    //if the last number is smaller than the first number return an empty arr
    //if no arg is passed in the last param then go to the end of arr

    if (start < 0) start = 0;
    if (end > arr.length) end = arr.length;
    if (end < start) return retVal;

    for (let index = start; index < end; index++)
    {
        retVal.push(arr[index]);
    }

    return retVal;
}

console.log(mySlice([1, 2, 3], 0, 2)) // prints [1, 2]
console.log(mySlice([1, 2, 3], 0, 4)) // prints [1, 2, 3]
console.log(mySlice([1, 2, 3], -1, 2)) // prints [1, 2]
console.log(mySlice([1, 2, 3], 1, 0)) // prints []
console.log(mySlice([1, 2, 3], 0)) // prints [1, 2, 3]
console.log(mySlice([1, 2, 3], 1)) // prints [2, 3];

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = mySlice;
} catch (e) {
    module.exports = null;
}
