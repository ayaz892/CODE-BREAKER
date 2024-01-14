/*Arrow Functions
ES6 introduced arrow function syntax, a shorter way to write functions by using the special “fat arrow” () => notation.

Arrow functions remove the need to type out the keyword function every time you need to create a function.
Instead, you first include the parameters inside the ( ) and then add an arrow => that points to the function body surrounded in { } like this:*/

const plantNeedsWater = (day)=> {
  if (day === 'Wednesday') {
    return true;
  } else {
    return false;
  }
};

//Functions that take only a single parameter do not need that parameter to be enclosed in parentheses.
//However, if a function takes zero or multiple parameters, parentheses are required.


const plantNeedsWater = day => day === 'Wednesday' ? true : false;          //instead of return we direct use variable

