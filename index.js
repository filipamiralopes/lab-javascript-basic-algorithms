// Iteration 1: Names and Input

const hacker1 = "Joana" // driver
const hacker2 = "Ana" // navigator
console.log(`The driver's name is ${hacker1}`)
console.log(`The navigator's name is ${hacker2}`)


// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
}
else if (hacker1.length < hacker2.length){
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`)
}
else{
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`)
}


// Iteration 3: Loops

let result = ""
for (let i=0; i<hacker1.length; i++) {
    result += hacker1[i].toUpperCase() + " ";
}
console.log(result)

let reverseName = ""
for(let i=hacker2.length-1; i>=0; i--) {
    reverseName += hacker2[i];
}
console.log(reverseName)

if (hacker1 < hacker2) {
    console.log(`The driver's name (${hacker1}) goes first.`);
}
else if (hacker1 > hacker2){
    console.log(`Yo, the navigator (${hacker2}) goes first, definitely.`)
}
else{
    console.log(`What?! You both have the same name?`)
}


// Bonus 2

let phraseToCheck = "put it up"
let reverseCleanWord = ""

for(let i=phraseToCheck.length-1; i>=0; i--) {

    

    if (phraseToCheck[i] === " "){
        continue;
    }
    else{
        reverseCleanWord += phraseToCheck[i].toLowerCase();
    }
}

// console.log(reverseCleanWord)

let phraseToCheckClean = ""

for (let i=0; i<phraseToCheck.length; i++) {

    if (phraseToCheck[i] === " "){
        continue;
    }
    else{
        phraseToCheckClean += phraseToCheck[i].toLowerCase();
    }
}

if (phraseToCheckClean === reverseCleanWord) {
    console.log(`'${phraseToCheck}' is a palindrome!`)
}
else {
    console.log(`'${phraseToCheck}' is NOT a palindrome...`)
}
