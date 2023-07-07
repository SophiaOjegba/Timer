const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`Assertion Passed: ${actual} === ${expected} \u{1F600}`);
  }
  else{
    console.log(`Assertion Failed: ${actual} !== ${expected} \u{1F612}`);
  }
};

function countLetters(sentence) {
  var result = {};
  const newSentence = sentence.replace(/\s/g, "").toLowerCase();
  
  for (const char in newSentence) {
    result[newSentence[char]] = 0;
  }
  
  for (const char in sentence) {
    result[newSentence[char]]++;
  }

  return result;
}

const output = countLetters("lighthouse in the house");
console.log(output);