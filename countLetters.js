//ASSERTEQUAL function
const assertEqual = function (actual, expected) {
  // If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
  // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};


//countLetters function
const countLetters = function (someString) {
  const letterCount = {};
  for (const letter of someString) {
    console.log(letter);
    // inside the loop, 
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it.
    if (letterCount[letter]) {
      letterCount[letter] += 1
    } else {
      letterCount[letter] = 1
    }
  }
  return letterCount;
}

console.log(countLetters("butterfly"));
