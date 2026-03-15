const dna = 'A|T|G|C|A|G';
const dnaArray = dna.split('|');
const interleaved = dnaArray.flatMap((char, index) =>
  index < dnaArray.length - 1 ? [char, 'X'] : [char]
);
console.log(interleaved);
