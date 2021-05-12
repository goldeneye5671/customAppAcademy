/******************************************************************************
Write a function reverseString(string) that takes in a hyphenated string and
returns a the hyphenated string reversed.

Examples:

reverseString("Go-to-the-store") => "store-the-to-Go"
reverseString("Jump,-jump-for-joy") => "joy-for-jump-Jump,"
*******************************************************************************/

function reverseString(string) 
{
  return string.split('-').reverse().join('-')
}

console.log(reverseString("Go-to-the-store"))// => "store-the-to-Go"
console.log(reverseString("Jump,-jump-for-joy"))// => "joy-for-jump-Jump,"

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = reverseString;
