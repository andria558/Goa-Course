class Sequence {
  constructor(code, length) {
    this.code = code;
    this.length = length;
  }

  getSummary() {
    return `Code: ${this.code}, Length: ${this.length}`;
  }
}

class MutatedSequence extends Sequence {
  constructor(code, length, mutationType) {
    super(code, length);
    this.mutationType = mutationType;
  }

  getSummary() {
    return `Code: ${this.code}, Length: ${this.length}, Mutation Type: ${this.mutationType}`;
  }

  static filterByLength(arr, min) {
    return arr.filter(seq => seq.length > min);
  }
}

// Example usage:
const seq1 = new MutatedSequence("ATGC", 120, "Insertion");
const seq2 = new MutatedSequence("CGTA", 80, "Deletion");
const seq3 = new MutatedSequence("GCTA", 150, "Substitution");

console.log(seq1.getSummary());
console.log(seq2.getSummary());

const filtered = MutatedSequence.filterByLength([seq1, seq2, seq3], 100);
filtered.forEach(seq => console.log(seq.getSummary()));
