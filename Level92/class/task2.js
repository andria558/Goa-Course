class Operative {
  constructor(name, rank) {
    this.name = name;
    this.rank = rank;
  }

  getInfo() {
    return `Name ${this.name}, Rank: ${this.rank}`;
  }

  static compareRanks(op1, op2) {
    if (op1.rank > op2.rank) {
      return `${op1.name} outranks ${op2.name}`;
    } else if (op1.rank < op2.rank) {
      return `${op2.name} outranks ${op1.name}`;
    } else {
      return `${op1.name} and ${op2.name} are at the same rank`;
    }
  }
}

class EliteOperative extends Operative {
  constructor(name, rank, specialty) {
    super(name, rank);
    this.specialty = specialty;
  }

  getInfo() {
    return `EliteOperative ${this.name}, Rank: ${this.rank}, Specialty: ${this.specialty}`;
  }
}