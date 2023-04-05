//ASSERTION FUNCTIONS

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

//GETMIDDLE FUNCTION
//INPUT: an array (myArray)
const getMiddle = function (myArray) {
  //HOW: 
  //initialize a variable to hold middle variable
  let middle = (Math.floor((myArray.length - 1) / 2));
  // console.log("the middle should be found at index " + middle);

  //loop over the values in the array (for of loop?)

  for (const index in myArray) {
    // console.log(index);
    //stop looping when you reach the middle value (if statement; myArray.length/2; mathFloor to round incase odd number?)
    // for arrays with 1 or 2 indexes return an empty array
    if (myArray.length <= 2) {
      return [];
      //for arrays with odd number of indexes return one middle index
    } else if (myArray.length % 2 !== 0) {
      if (Number(index) === middle) {
        // console.log("the middle is index " + middle);
        return "the middle value is " + myArray[index];
      }
      //for arrays with even number of indexes return two middle indexes
    } else if (myArray.length % 2 === 0) {
      if (Number(index) === middle) {
        return "the middle values are " + myArray[index] + " and " + myArray[Number(index) + 1];
      }
    }

  }
}

//OUTPUT: one index, two indexes OR empty array

// TEST CODE
console.log(getMiddle([1])); // => []
console.log(getMiddle([1, 2])); // => []
console.log(getMiddle([1, 2, 3])); // => [2]
console.log(getMiddle([1, 2, 3, 4, 5])); // => [3]
console.log(getMiddle([1, 2, 3, 4])); // => [2, 3]
console.log(getMiddle([1, 2, 3, 4, 5, 6])); // => [3, 4]
