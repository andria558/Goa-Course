class Specimen {
  constructor(id, type) {
    this.id = id;
    this.type = type;
  }

  getLabel() {
    return `Specimen ID: ${this.id}, Type: ${this.type}`;
  }
}


class MutantSpecimen extends Specimen {
  constructor(id, type, mutationLevel) {
    super(id, type); 
    this.mutationLevel = mutationLevel;
  }

  getLabel() {
    return `Specimen ID: ${this.id}, Type: ${this.type}, Mutation Level: ${this.mutationLevel}`;
  }

  static mostMutated(arr) {
    return arr.reduce((max, current) => {
      return current.mutationLevel > max.mutationLevel ? current : max;
    });
  }
}

// Example usage:
const s1 = new MutantSpecimen("A1", "Blood", 3);
const s2 = new MutantSpecimen("B2", "Tissue", 7);
const s3 = new MutantSpecimen("C3", "Saliva", 5);

console.log(s1.getLabel()); 
console.log(s2.getLabel()); 

const mostMutated = MutantSpecimen.mostMutated([s1, s2, s3]);
console.log("Most Mutated:", mostMutated.getLabel());
