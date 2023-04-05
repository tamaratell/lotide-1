const letterPositions = function (sentence) {
  const results = {};
  // logic to update results here
  // loop over all items in the sentence
  for (let i = 0; i < sentence.length; i++) {
    const letter = sentence[i];
    if (letter === " ") {
      continue;
    }

    // add all items in the sentence to the results
    // console.log(letter);
    if (!results[letter]) {
      results[letter] = [];
    }

    results[letter].push(i);

  }
  return results;
};

console.log(letterPositions("hel lo"));

const example = {
  h: 1,
  e: 1,
  l: 2,
  o: 1
}