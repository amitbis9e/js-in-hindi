// Modern way of string called String interpolation
// use Backticks``  and make placeholder to inject variables
// inject variables in placeholder

const name = "amit"
const repoCount = 0

console.log(`hello my is ${name} and my repositery count ${repoCount}`)

const gameName = new String('amitbishnoi') 
console.log(gameName)
console.log(gameName.__proto__) // Syntex but we can directy use 
                                  // fuction or methouds as below

console.log(gameName.length)
console.log(gameName.toUpperCase())
console.log(gameName.indexOf('b'))
console.log(gameName.charAt(4));

// Some more intresting Methods 

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-11, 4)   // in slice -ve value is allowed
console.log(anotherString);

const newStringOne = "     Amit bishnoi  i     "
console.log(newStringOne);   
console.log(newStringOne.trim());       // trim remove spaces of string 
console.log(newStringOne.trimEnd());

const url ="https://amitbis99e.com/bishnoi9229"
console.log(url.replace('bishnoi9229', '0001'))

console.log(url.includes('amit'))

// split used to convert string in arry on the basics of spaces, comma, '-' in a string 
// like      name = "Er. Amit bishnoi "
//split       [er , amit, bishnoi]