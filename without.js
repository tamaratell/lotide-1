const eqArrays = function (array1, array2) {
  //loop over array 1 
  console.log(array1, array2);
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
    //   if every index of array 1 matches array 2
    //   return true
    // else return false
  } return true;
}

const assertEqArrays = function (array1, array2) {
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
}


const without = function (sourceArray, itemsToRemove) {
  // console.log(`The source Array provided is: ${sourceArray} and the items to remove are: ${itemsToRemove}`);
  //check how many items to remove there are in itemsToRemove (test)
  const removeAmount = itemsToRemove.length;
  // console.log(`there are ${removeAmount} items to remove`);
  //loop over sourceArray
  for (let i = 0; i < sourceArray.length; i++) {
    //if itemsToRemove doesn't match source array end function
    //if index of sourceArray matches itemsToRemove
    //remove that index from array
    if (sourceArray[i] === itemsToRemove[i]) {
      sourceArray.splice(i, removeAmount);
    }
  }
  // else if (sourceArray[i] !== itemsToRemove[i]) {
  //   return "Error: an element in this array does not exist in itemsToRemove";
  return sourceArray;

  // console.log("new array: " + sourceArray);
}


console.log(without(["1", "2", "3"], [1, 2, "3"]));
console.log(without([1, 2, 3], [1])); // => [2, 3]