// // "use strict"

// class Person {
//     constructor(myName, myAge, myOccs, currentOcc, currentSalary){
//         this._Name = myName;
//         this._Age = myAge;
//         this._Occs = myOccs;
//         this._canWork;
//         this._currentOcc = currentOcc;
//         this._salary = currentSalary;
//     }


//     get Name(){return this._Name;}
//     get Age(){return this._Age;}
//     get Occs(){return this._Occs;}
//     get currentOcc(){return currentOcc;}
//     get salary(){return this._salary;}
    
//     set Name(newName){this._Name = newName;}
//     set Age(newAge){this._Age = newAge;}
//     set Occs(newOccs){this._Occs = newOccs;}
//     set currentOcc(newCurrentOcc){this._currentOcc = currentOcc;}
//     set salary(newSalary){this._salary = currentSalary;}

//     determineElegibilityToWork(){
//         if (this._Age < 12) return false;
//         if (this._Age > 70) return false;
//         return true;
//     }
// }


// let myFunction = (var1) => {
//     console.log(var1 + " is the value");
// }

// myFunction("Mario");

// let Anthony = new Person("Anthony", 20, ["Programmer", "Server"], "Student");
// console.log(Anthony.Name);
// console.log(Anthony.Age);
// console.log(Anthony.Occs);
// console.log(Anthony.determineElegibilityToWork());
// let {Name, Age, Occs} = Anthony;
// console.log(Occs);


// let logBetween = (lowNum, highNum) => {
//     if (lowNum > highNum){
//         for (let i = lowNum; i >= highNum; i--){
//             console.log(i);
//         }
//     }else{
//         for (let i = lowNum; i <= highNum; i++){
//             console.log(i)
//         }
//     }
// }

// function isSubstring(searchString, subString) {
// //	searchString = searchString.toLowerCase();
// //  	subString = subString.toLowerCase();
//     return searchString.toLowerCase().indexOf(subString.toLowerCase())!== -1;
// }

// function fizzBuzz (num) {
//     for (let i = 0; i < num; i++){
//         if (i % 3 == 0 || i % 5 == 0){
//             if (i%3 == 0 && i%5 == 0){ continue; }
//         console.log(i);
//         }
//     }
//   }
  
  
//   fizzBuzz(20);

// console.log(isSubstring("The cat went to the store", "he cat went")); // => true
// console.log(isSubstring("Time to program", "time")); // => true
// console.log(isSubstring("Jump for joy", "joys")); // => false

// logBetween(16, 13);

// function pigLatinWord(word) {
//     let vowels = ['a', 'e', 'i', 'o', 'u']
//     console.log(word[0])
//     if (vowels.includes(word[0].toLowerCase())){ return word + "yay";}
    
//     let index = 0;
//     for (let i = 0; i <= word.length -1; i++){
//        let end = false; 
//        for (let item of vowels){
//           if (word[i] == item){
//             index = i;
//             end = true;
//             break;
//           }
//        }
//        if (end) break;
//     }
//     let addToEnd = word.slice(0, index);
//     word = word.slice(index, word.length-1);
//     return word + addToEnd + "yay"
// };

// console.log(pigLatinWord("apple")); //=> "appleyay"
// console.log(pigLatinWord("eat")); //=> "eatyay"
// console.log(pigLatinWord("banana")); //=> "ananabay"
// console.log(pigLatinWord("trash")); //=> "ashtray" astryay


// your code here

// let pairsMaker = (arr) => {
//     let retVal = [];
//     for (let i = 0; i < arr.length; i++){
//         for (let j = i+1; j < arr.length; j++){
//            retVal.push([arr[i], arr[j]]);
//       }
//     }
//     return retVal
//   }

// let repeatingTranslate = (sentence) => 
// {
// 	  let words = sentence.split(' ')
//     let newSentence = []
//     let vowels = 'aeiou';
    
//     for (let word of words)
//     {
//       if (word.length < 3) 
//       {
//         newSentence.push(word);
//       }
//       else if (vowels.includes(word[word.length-1]))
//       {
//         newSentence.push(word+word)
//       }
//       else
//       {
//         let repeatVal = "";
//           //find last vowel and grab from that to the end of the word
//         for (let i = word.length-1; i >= 0; i--)
//         {
//         	if (vowels.includes(word[i]))
//           {
//               repeatVal = word.slice(i, word.length);
//               break;
//           }
//         }
//         newSentence.push(word+repeatVal)
//       }
//     }
//     return newSentence.join(' ');
//   }




// console.log(repeatingTranslate("we like to go running fast"));  // "we likelike to go runninging fastast"
// console.log(repeatingTranslate("he cannot find the trash"));    // "he cannotot findind thethe trashash" 
// console.log(repeatingTranslate("pasta is my favorite dish"));   // "pastapasta is my favoritefavorite dishish"
// console.log(repeatingTranslate("her family flew to France"));   // "herer familyily flewew to FranceFrance"

// let chooseyEndings = (words, ending) => 
// {
// 	let containsEnding = [];
//   	if (Array.isArray(words))
//     {    
//         for (let word of words)
//         {
            
//             if (word.slice(word.length-ending.length, word.length)==ending)
//             {
//                 containsEnding.push(word); 
//             }
//         }
// 	}
	
//   	return containsEnding
// }


// console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'ly'));
// // [ 'family', 'fly', 'timidly' ]

// console.log(chooseyEndings(['family', 'hound', 'catalyst','fly', 'timidly', 'bond'], 'nd'));
// // [ 'hound', 'bond' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'icity'));
// // [ 'simplicity', 'felicity' ]

// console.log(chooseyEndings(['simplicity', 'computer', 'felicity'], 'ily'));
// // [ ]

// console.log(chooseyEndings(17, 'ily'));
// // [ ]


// let reverb = (word) =>
// {
//   	if (typeof(word) !== "string")
//     {
//     	return null; 
//     }
  
// 	let vowel = 'aeiou';
//   	let splitWord = word.split('');
//   	let endingToAdd = ''	
  
//   	for (let i = splitWord.length-1; i >= 0; i--)
//     {
//     	 if (vowel.includes(splitWord[i].toLowerCase()))
//          {
//          	endingToAdd = splitWord.slice(i, splitWord.length).join('')
//            	break;
//          }
//     }
//   	console.log(endingToAdd);
//   	return word+endingToAdd;
// }


// console.log(reverb('running')); // runninging
// console.log(reverb('FAMILY'));  // FAMILYILY
// console.log(reverb('trash'));   // trashash
// console.log(reverb('DISH'));    // DISHISH
// console.log(reverb(197393));    // null



// Your code here

// let threeIncreasing = listOfNumbers => 
// {
// 	let previousNumber = listOfNumbers[0];
//   	let count = 1;
  
//   	for (let number of listOfNumbers)
//     {
//      	if (number === (previousNumber+1))
//         {
//         	count++
//         }
//       	else
//         {
//         	count = 1;
//         }
//         if (count === 3)
//         {
//           return true;
//         }
//         previousNumber = number;
//     }
//   	return false;
// }

// console.log(threeIncreasing([3, 2, 11, 12, 13, 2, 4]));     // true
// console.log(threeIncreasing([2, 7, 8, 9]));                 // true
// console.log(threeIncreasing([7, 2, 4, 5, 2, 1, 6]));        // false
// console.log(threeIncreasing([1, 2, 4, 5, 2, 7, 8]));        // false

// let uncompress = strRepeat => 
// {
//   decompressedStr = "";
  
// 	for (let i = 1; i < strRepeat.length; i+=2)
//   {
//     	for(let j = 0; j < strRepeat[i]; j++)
//       {
//       	decompressedStr += strRepeat[i-1]; 
//       }
//   }
  	
//   	return decompressedStr;
// }


// console.log(uncompress('x3y4z2')); // 'xxxyyyyzz'
// console.log(uncompress('a5b2c4z1')); // 'aaaaabbccccz'
// console.log(uncompress('b1o2t1')); // 'boot'

// let zanyZip = (item1, item2) =>
// {
//   	let zipped = [];
//   	let bigger = 0;
  
// 	if (item1.length > item2.length)
//     {
//       	bigger = item1.length;
      	
//     	while (item2.length < item1.length)
//         {
//         	item2.push(null); 
//         }
//     }
//   	else
//     {
//       	bigger = item2.length;
      	
//      	while(item2.length > item1.length)
//         {
//          	item1.push(null); 
//         }
//     }
  
//   	for(let i = 0; i < bigger; i++)
//     {
// 		  zipped.push([item1[i], item2[i]]);
//     }
     
//   	return zipped;
// }

// console.log(zanyZip([1, 2], ['eins', 'zwei', 'drei', 'vier']));


// Your code here

// let sillyString = word =>
// {
// 	let chars = word.split('');
//   	let vowels = 'aeiou'
    
//   	for (let i = 0; i < chars.length; i++)
//     {
//     	if (vowels.includes(chars[i]))
//         {
//         	chars.splice(i+1, 0, "b", chars[i]);
//           i+=2; 
//         }
//     }
//   	return chars.join("");
// }

// console.log(sillyString('stop'));       // stobop
// console.log(sillyString('that'));       // thabat
// console.log(sillyString('can'));        // caban
// console.log(sillyString('cats'));       // cabats
// console.log(sillyString('italy'));      // ibitabaly
// console.log(sillyString('scooter'));    // scobooboteber scobooboteber

// let hasThreeVowels = word =>
// {
// 	let vowelsInWord = {}
//     let vowels = 'aeiou'
    
//     for (let i = 0; i < word.length; i++)
//     {
//     	 if (vowels.includes(word[i]))
// 		 {
//            	if (word[i] in vowelsInWord)
//             {
//             	vowelsInWord[word[i]]++;
//             }
//             else
//             {
//               vowelsInWord[word[i]] = 0;
//             }
//          }
//     }
  	
//   	if (Object.keys(vowelsInWord).length >= 3)
//     {
//     	 return true;
//     }
//   	else
//     {
//       	return false;
//     }
// }

// console.log(hasThreeVowels('delicious'));       //  true
// console.log(hasThreeVowels('bootcamp prep'));   //  true
// console.log(hasThreeVowels('bootcamp'));        //  false
// console.log(hasThreeVowels('dog'));             //  false
// console.log(hasThreeVowels('go home'));         //  false


let pascalsTriangle = (iterations) =>
{

  let retVal = [
    [1]
  ]

  for (let i = 1; i < iterations; i++)
  {
    console.log(retVal[i-1])
    retVal.push(addPas(retVal[i-1]))
  }

  return retVal;
}

let addPas = (arr) =>
{
  let retVal = []

  retVal.push(1);
  if (arr.length > 1)
  {
    for (let i = 0; i < arr.length-1; i++)
    {
      retVal.push(arr[i]+arr[i+1]);
    }
  }
  retVal.push(1)
  return retVal;
}

console.log(pascalsTriangle(10))
