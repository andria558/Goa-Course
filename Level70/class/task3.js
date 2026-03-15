`Description:
Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.

Examples
"Hi!" --> "H!!"
"!Hi! Hi!" --> "!H!! H!!"
"aeiou" --> "!!!!!"
"ABCDE" --> "!BCD!"`

// solution :

// function replace(s) {
//   //coding and coding....
//     return '';
// }

// my code :

function replace(s) {

  replaced = s.replace(/[aeiouAEIOU]/g, "!")
  return replaced
}