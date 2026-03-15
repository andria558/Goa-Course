function longerWord(word1, word2) {
    if (word1.length > word2.length) {
        return word1;
    } else if (word2.length > word1.length) {
        return word2;
    } else {
        return "equal";
    }
}

console.log(longerWord("pineapple", "dog"));
console.log(longerWord("zzz", "car"));
