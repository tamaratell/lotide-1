// ASSERT EQUAL FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  // If the values match, it should print (console.log) the following: Assertion Passed: [actual] === [expected] (but with the values filled in)
  // Otherwise it should print (console.log) the following: Assertion Failed: [actual] !== [expected] (but with the values filled in)

  if (actual === expected) {
    console.log(`✅Assertion Passed: ${actual}  === ${expected}`);
  } else {
    console.log(`🛑Assertion Failed: ${actual} !== ${expected}`);
  }

};

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
//INPUT: itemsToCount and allItems
//OUTPUT: an object that represents the counts of the strings found in allItems
const countOnly = function (allItems, itemsToCount) {
  const results = {}; //declare an empty object to hold results 
  for (const item of allItems) { //using a for of loop to loop over every index in the input Array
    console.log(item); //testing to make sure loop works
    if (!itemsToCount[item]) { // filter if statement - if the index is not in itemsToCount...
      continue; //skip this loop
    }
    // inside the loop, 
    // increment the counter for each item:
    //   set a property with that string key to:
    //     the value that was already there (or zero if nothing there) with 1 added to it
    if (!results[item]) { //if item is not in results, do not count
      results[item] = 0;
    }

    results[item]++; //count for each item that we are including ++
  }
  return results;
}

//TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

