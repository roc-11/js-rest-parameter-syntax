/**
 * To run this file in Gitpod, use the 
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call

const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3);
console.log(sum);

// Extra arguments are ignored
let sum2 = sumAll(1,2,3,4,5,6);
console.log(sum2); // last 3 parameters will just be ignored

// Function using ...rest
const sumRest = (a, b, c, ...rest) => { //...rest signifies "the rest" of the parameters
    let sum = a + b + c;
    for (let i of rest) {
        sum += i;
    }

    return sum
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6);
console.log(sum3);
