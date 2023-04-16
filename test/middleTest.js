const assert = require('chai').assert;
const getMiddle = require("../middle");

// TEST CODE
// console.log(getMiddle([1])); // => []
// console.log(getMiddle([1, 2])); // => []
// console.log(getMiddle([1, 2, 3])); // => [2]
// console.log(getMiddle([1, 2, 3, 4, 5])); // => [3]
// console.log(getMiddle([1, 2, 3, 4])); // => [2, 3]
// console.log(getMiddle([1, 2, 3, 4, 5, 6])); // => [3, 4]



describe("#getMiddle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(getMiddle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(getMiddle([1, 2]), []);
  });
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(getMiddle([1, 2, 3]), 2);
  });
  it("returns 3 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(getMiddle([1, 2, 3, 4, 5]), 3);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assert.deepEqual(getMiddle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(getMiddle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });

}); 