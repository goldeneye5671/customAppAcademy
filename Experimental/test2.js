// 1. Intakes a string
//   2. Returns the string in uppercase
//   Write a callback called ‘lower’ that:
//   1. Intakes a string
//   2. Returns the string in lowercase
// Write a higher order function called ‘concat’ that:
//   1. Intakes three parameters
//     1. A string
//     2. Another string
//     3. An optional callback
//   2. Concatenates the strings
//   3. If the callback is not defined
//     1. Return the concatenated string
//   4. If the callback is defined
//     1. Return the result of the callback
//        passing in the concatenated string


let upper = (string) => 
{
    return string.toUpperCase();
}

let lower = (string) =>
{
    return string.toLowerCase();
}

let concat = (string, string2, action) =>
{
    if (action === undefined) return string.concat(string2);

    return action(string).concat(action(string2));
}

console.log(concat("AnthoNY", "SEEfrIEd", upper));
