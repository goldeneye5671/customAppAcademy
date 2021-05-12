/*

Write a function `hipsterfy(sentence)` that takes in a sentence string and
returns the sentence where every word is missing it's last vowel.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hipsterfy('When should everyone wake up?')); // 'Whn shold everyon wak p?'
console.log(hipsterfy('get ready for our bootcamp')); // 'gt redy fr or bootcmp'
console.log(hipsterfy('panthers are great animals')); // 'panthrs ar gret animls'

*/

// your code here

let hipsterfy = (sentence) =>
{
    let newSentence = [];
    sentence.split(" ").forEach(
        (item) => 
        {
            let vowels = 'aeiou';
            for (let index = item.length-1; index >= 0; index--)
            {
                if (vowels.includes(item[index]))
                {
                    let splitItem = item.split("");
                    splitItem.splice(index, 1);
                    splitItem = splitItem.join("");
                    newSentence.push(splitItem);
                    break;
                }
            }
        }
    )
    return newSentence.join(" ");
}


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = hipsterfy;
} catch (e) {
    module.exports = null;
}
