// Task 1
const name = "Andria";
const age = 25;
const user = { name, age };
console.log("Task 1:", user);

// Task 2
const calculator = {
  multiply(a, b) {
    return a * b;
  }
};
console.log("Task 2:", calculator.multiply(5, 6));

// Task 3
const key = "level";
const player = {
  [key]: 42
};
console.log("Task 3:", player);

// Task 4
const baseStats = { strength: 10, agility: 8 };
const bonusStats = { agility: 12, stamina: 15 };
const finalStats = { ...baseStats, ...bonusStats };
console.log("Task 4:", finalStats);

// Task 5
const action = "jump";
const character = {
  name: "Ninja",
  [action]() {
    return `${this.name} is jumping!`;
  }
};
console.log("Task 5:", character.jump());
