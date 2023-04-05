//ASSERT EQUAL FUNCTION
const assertEqual = function (actual, expected) {
  // If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
  // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};

const someObject = {
  name: "🥔",
  type: "Yukon Gold",
};

//FUNCTION
//INPUT: a value (string) for which we want to find the associated key
const findKeybyValue = function (inputValue) {
  // HOW?
  // loop over all the values in the object (for in?)
  // if the value is NOT the inputvalue, skip.
  const key = 0;
  for (key in someObject) {
    if (inputValue === someObject[key]) {
    }
  }
  return key;
}
// return the key of the input value


console.log(findKeybyValue(someObject, "Yukon Gold"));
//OUTPUT: that value's key (or an error message?)


// for (const key in someObject) {
//   // console.log(key); // this gets us the key
//   console.log(someObject[key]); //this gets us the value 
// }

// const someObjectKeys = Object.keys(someObject);
// for (const key of someObjectKeys) {
//   console.log(key);
//   console.log(someObject[key]);
// }



//TEST

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama: "The Wire"
// };

// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);