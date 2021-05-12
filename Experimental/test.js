// let arrOfPpl = [
//     {Name: "Anthony", Age: 20},
//     {Name: "Joshua", Age: 22},
//     {Name: "Becka", Age: 18},
//     {Name: "Sam", Age: 20},
//     {Name: "Georgie", Age: 19}
// ]


// arrOfPpl.forEach(item => item["Human"] = true)
// console.log(arrOfPpl);
// arrOfPpl.forEach(item => delete item["Human"])
// console.log(arrOfPpl);
// arrOfPpl.sort((a, b) => {if (a.Age < b.Age) {return 1} return -1})
// console.log(arrOfPpl)
// const names = arrOfPpl.map(item => item.Name);
// const ages = arrOfPpl.map(item => item.Age);
// const filtered = arrOfPpl.filter(item => item.Name.length > 5  )
// console.log(filtered);
// console.log(arrOfPpl);
// console.log(names);
// console.log(ages);


// let functionHolder = {
//     sayHello: (aName) => {
//         console.log(`I am saying hello to ${aName}`)
//     },

//     giveMeSomethingToDo: (aFunkyFunc) => {
//         aFunkyFunc("A param if needed");
//         console.log(`I did a ${aFunkyFunc} thing!!`)
//     }
// }

class functionHolder2 {
    constructor(){
        this._name = ''
    };

    set name(newName)
    {
        this._name = newName
    };
    
    get name()
    {
        return this._name;
    };

    sayHello (somethingToSayHi) 
    {
        console.log(`I am saying hello to ${somethingToSayHi}`);
        return this.sayHello;
    };

    giveMeSomethingToDo (aFunkyFunk) 
    {
        console.log(aFunkyFunk())
        console.log(`I did a ${aFunkyFunk} thing!!`);
    };
}

let myObj = new functionHolder2();
console.log(myObj.name);
// // 
// functionHolder.giveMeSomethingToDo(functionHolder.sayHello)
