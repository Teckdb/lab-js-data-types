/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string

const tongueTwister =`${s1} ${s2} ${s3} ${s4} ${s5} ${s3} ${s2} ${s1} ${s4}`

// Print out the concatenated string

console.log(tongueTwister)


/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings

capitalize = function(str1){
    return str1.slice(0, str1.length-1) + str1.charAt(str1.length -1).toUpperCase()
  }    
  
// Print the cameLtaiL-formatted string

console.log(capitalize(part1)+capitalize(part2));



/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 84;

// Calculate the tip (15% of the bill total)
const tip = 15;
const tipAmount = (billTotal * tip / 100) 

// Print out the tipAmount

console.log(tipAmount)


/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

// Print the generated random number

console.log(getRandomIntInclusive(0, 10))

/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b;
console.log(`The expression 1 is false > ${expression1}`)
const expression2 = a || b;
console.log(`The expression 2 is true > ${expression2}`)
const expression3 = !a && b;
console.log(`The expression 3 is false > ${expression3}`)
const expression4 = !(a && b);
console.log(`The expression 4 is true > ${expression4}`)
const expression5 = !a || !b;
console.log(`The expression 5 is true > ${expression5}`)
const expression6 = !(a || b);
console.log(`The expression 6 is false > ${expression6}`)
const expression7 = a && a;
console.log(`The expression 7 is true > ${expression7}`)