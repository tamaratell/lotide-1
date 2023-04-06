// Our map function will take in two arguments:
// An array to map
// The map function
//callback function will return a new array based on the results of the callback function.

const words = ["ground", "control", "to", "major", "tom"];

const map = (array, callback) => {
  const results = [];
  for (let item of array) {
    //console.log('item BEFORE: ', item);
    //console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item));
  }
  return results;
}


//TEST
const results1 = map(words, word => word[0]);
console.log(results1);

