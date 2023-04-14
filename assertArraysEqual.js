const assertArraysEqual = function(array1, array2) {
  //loop over array 1 
  console.log(array1, array2);
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return `🛑Assertion Failed: ${array1} !== ${array2}`;
    }
    //   if every index of array 1 matches array 2
    //   return true
    // else return false
  } return `✅Assertion Passed: ${array1} === ${array2}`;
};

module.exports = assertArraysEqual;