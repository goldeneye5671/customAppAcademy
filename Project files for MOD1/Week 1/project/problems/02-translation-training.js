/*
    Translation Training
    Write a function translationTraining(sentence) that accepts a sentence string and returns a new version of the sentence
    with the new words that alternate between having their first or last vowel removed.

    THe first word of the sentence should have its first vowel removed.
    The second word of the sentence should have its last vowel removed.
    The third word of the sentence should have its first vowel removed.
    The fourth word of the sentence should have its last vowel removed.

    A word without vowels should remain unchanged

    And so on. See examples below:

    console.log(translationTraining("What are you doing")); // prints "Wht ar yu dong"
    console.log(translationTraining("This is tedious")); // prints "Ths s tdious"
    console.log(translationTraining("Programming is fun")); // prints "Prgramming s fn"
    console.log(translationTraining("My food is getting cold")) // prints "My fod s gettng cld"

    Hint: Use helper methods.
*/

function translationTraining(sentence) 
{
    //check to see if word contains vowel before sending to helper
    let vowels = 'aeiou';
    let splitSentence = sentence.split(' ');
    let retVal = []
    let first = true;
    //for loop begins iterating over the words
    for (let index = 0; index < splitSentence.length; index++)
    {
        //split up the words into characters
        let chars = splitSentence[index].split('');
        //check to see what to remove (first or last vowel)
        if (first)
        {
            retVal.push(changeFirst(chars, vowels).join(''));
        }
        else
        {
            retVal.push(changeLast(chars, vowels).join(''));
        }
        first = !first;
    }

    return retVal.join(' ');
}

function changeFirst(chars, vowels)
{
    //iterates over the characters.
    for (let char = 0; char < chars.length; char++)
    {
        //sees if the current char is a vowel or not
        if (vowels.includes(chars[char].toLowerCase()))
        {
            chars.splice(char, 1);
            return chars;
        }
    }
    
    return chars
}

function changeLast(chars, vowels)
{
    for (let char = chars.length-1; char >= 0; char--)
    {
        if (vowels.includes(chars[char].toLowerCase()))
        {
            chars.splice(char, 1);
            return chars;
        }
    }

    return chars;
}

console.log(translationTraining("How are thy doing?")); // prints Hw ar thy dong?
console.log(translationTraining("What are you doing")); // prints "Wht ar yu dong"
console.log(translationTraining("This is tedious")); // prints "Ths s tdious"
console.log(translationTraining("Programming is fun")); // prints "Prgramming s fn"
console.log(translationTraining("My food is getting cold")) // prints "My fod s gettng cld"


/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
    module.exports = translationTraining;
} catch (e) {
    module.exports = null;
}
