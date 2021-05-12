/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/


// your code here

let hasThreeVowels = word =>
{
	// let vowelsInWord = {}
    // let vowels = 'aeiou'
    // let splitWord = word.split('')
    // splitWord.forEach(element => {
    //     if (vowels.includes(element))
    //     {
    //             if (element in vowelsInWord)
    //         {
    //             vowelsInWord[element]++;
    //         }
    //         else
    //         {
    //             vowelsInWord[element] = 0;
    //         }
    //     }
    // })
  	
  	// if (Object.keys(vowelsInWord).length >= 3)
    // {
    // 	 return true;
    // }
  	// else
    // {
    //   	return false;
    // }

    let vowels = ['a', 'e', 'i', 'o', 'u;'];
    let count = vowels.reduce((acc, vowel) => {if (word.includes(vowel)){acc++} return acc}, 0);
    return count >= 3
}


console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/


try {
    module.exports = hasThreeVowels;
} catch (e) {
    module.exports = null;
}
