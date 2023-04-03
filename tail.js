const assertEqual = function (actual, expected) {
  // If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
  // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)

  if (actual === expected) {
    return `✅Assertion Passed: ${actual}  === ${expected}`;
  } else {
    return `🛑Assertion Failed: ${actual} !== ${expected}`;
  }
}


// function tail(array) {
//   let result = [];
//   for (let i = array[1]; i < array.length; i++) {
//     result += array[i];
//     return result;
//   }
// }

function tail(array) {
  let result = array.slice(1);
  return result;
}


const words = ["Yo Yo", "Lighthouse", "Labs"];
console.log(tail(words)); // no need to capture the return value since we are not checking it
console.log(assertEqual(words.length, 3)); // original array should still have 3 elements!

