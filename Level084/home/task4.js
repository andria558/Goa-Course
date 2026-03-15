const words = ["world", "the", "around", "travel", "to", "want", "I"];

const sentence = words.reduceRight((acc, word) => {
  return acc + " " + word;
}, "") + ".";

console.log(sentence);
