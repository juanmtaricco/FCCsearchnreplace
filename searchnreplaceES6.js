/* Same solution but using ternary operators and ES6 fat arrow functions */

const myReplace = (str, before, after) => before[0].match(/[A-Z]/) ? str.replace(before, after.replace(after[0], after[0].toUpperCase())) : str.replace(before, after);

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");