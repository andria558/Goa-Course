class Piece {
  constructor(shape, color) {
    this.shape = shape;
    this.color = color;
  }

  getInfo() {
    return `Shape: ${this.shape}, Color: ${this.color}`;
  }
}

class RarePiece extends Piece {
  constructor(shape, color, rarityScore) {
    super(shape, color);
    this.rarityScore = rarityScore;
  }

  getInfo() {
    return `Shape: ${this.shape}, Color: ${this.color}, Rarity Score: ${this.rarityScore}`;
  }

  static rarest(arr) {
    return arr.reduce((max, current) => {
      return current.rarityScore > max.rarityScore ? current : max;
    });
  }
}

// Example usage:
const p1 = new RarePiece("Circle", "Red", 7);
const p2 = new RarePiece("Square", "Blue", 9);
const p3 = new RarePiece("Triangle", "Green", 5);

console.log(p1.getInfo());
console.log(p2.getInfo());

const rarestPiece = RarePiece.rarest([p1, p2, p3]);
console.log("Rarest Piece:", rarestPiece.getInfo());
