// we can use both single and double quete to denote string in js

const name = "nabin"
const repoCount = 5

// console.log( name + " repoCount"); // It is not recommended to use

// console.log(`Hello my name is ${name} and repo count is ${repoCount}`);


const gameName = new String('nabin-nb-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toLocaleUpperCase());
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('i'));

// const newString = gameName.substring(0, 4)
// console.log(newString);

// const anotherString = gameName.slice(-8, 2)
// console.log(anotherString);

const newStringOne = " nabin   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://nabin,com/nabin%10bk"

console.log(url.replace('%10','-'));

console.log(url.includes('surkhet'));

console.log(gameName.split('-'));











