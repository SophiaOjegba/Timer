const assertEqual = require('./assertEqual');
const head = function(array) {
  if (array.length === 0) {
    return undefined;
  }
  return array[0];
};

let myArray = head([5, 6, 7]);
console.log(myArray);

module.exports = head;