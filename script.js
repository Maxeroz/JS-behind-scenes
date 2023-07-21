'use strict';

/*
function calcAge(birtYear) {
  const age = 2037 - birtYear;

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birtYear}`;
    console.log(output);

    if (birtYear >= 1981 && birtYear <= 1996) {
      var millenial = true;
      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }

    // console.log(str);
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);

*/

// Variables
console.log(me);
// console.log(job);
// console.log(birthYear);

var me = 'Jonas';
let job = 'teacher';
const birthYear = 1991;

// Functions
console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExp = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// Example

if (!numProducts) deleteShoppingCar();

var numProducts = 10;

function deleteShoppingCar() {
  console.log('All products deleted!');
}
