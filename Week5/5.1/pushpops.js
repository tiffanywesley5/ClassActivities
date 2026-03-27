// const numbers = [1, 2, 3, 4];
// numbers.push(5);
// console.log(numbers);
// numbers.unshift(0);
// console.log(numbers);

// let num1 = numbers.pop();
// console.log(numbers);
// let num2 = numbers.shift();
// console.log(numbers);
// console.log(num1, num2);

const nums = [6, 5, 2, 3, 4, 1, 0];
// remove each of the last two items with pop(), saving each item to a variable

const num0 = nums.pop()
console.log(`num0 is ${num0} and nums is ${nums}`);
const num1 = nums.pop();
console.log(`num0 is ${num1} and nums is ${nums}`);

// remove each of the first two items with shift(), saving each item to a variable
const num6 = nums.shift();
console.log(`num6 is ${num6} and nums is ${nums}`)
const num5 = nums.shift();
console.log(`num5 is ${num5} and nums is ${nums}`)
// use push and unshift to add the variables back to the array in numerical order, 0-6
