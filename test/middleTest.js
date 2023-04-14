const assertArraysEqual = require("../assertArraysEqual");
const getMiddle = require("../middle");

// TEST CODE
console.log(getMiddle([1])); // => []
console.log(getMiddle([1, 2])); // => []
console.log(getMiddle([1, 2, 3])); // => [2]
console.log(getMiddle([1, 2, 3, 4, 5])); // => [3]
console.log(getMiddle([1, 2, 3, 4])); // => [2, 3]
console.log(getMiddle([1, 2, 3, 4, 5, 6])); // => [3, 4]