// ASSERT EQUAL FUNCTION
const assertEqual = function (actual, expected) {
  // If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
  // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};

//Implement the function findKey which takes in an object and a callback. It should scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it should return undefined.

const findKey = (object, callback) => {
  //loop through the object
  //when truthy condition is NOT met
  //return undefined
  //otherwise return key
  for (let key in object) {
    //console.log(object[key]);
    if (callback(object[key])) {
      return key;
    }
  }
  return undefined;
}



//TEST
console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri": { stars: 3 },
  "noma": { stars: 2 }, //
  "elBulli": { stars: 3 },
  "Ora": { stars: 2 }, //
  "Akelarre": { stars: 3 }
}, x => x.stars === 2)) // => "noma"
