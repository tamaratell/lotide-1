//OG ASSERT EQ FUNCTIOn
const assertEqual = function (actual, expected) {
  // If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
  // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }


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

};

//NEW FUNCTION EQOBJECTS
// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  //turn objects into arrays. 
  const object1Keys = Object.keys(object1);
  // const object1Values = Object.values(object1);
  const object2Keys = Object.keys(object2);
  // const object2Values = Object.values(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  for (let key of object1Keys) {
    if (object1[key] !== object2Keys[key]) {
      return false;
    }
  }
  return true;
}





const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
console.log(eqObjects(shirtObject, anotherShirtObject)); // => true