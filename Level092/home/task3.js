class Agent {
  constructor(name, version) {
    this.name = name;
    this.version = version;
  }

  getStatus() {
    return `Agent: ${this.name}, Version: ${this.version}`;
  }
}

class FieldAgent extends Agent {
  constructor(name, version, location) {
    super(name, version);
    this.location = location;
  }

  getStatus() {
    return `Agent: ${this.name}, Version: ${this.version}, Location: ${this.location}`;
  }

  static latestVersion(a1, a2) {
    return a1.version > a2.version ? a1 : a2;
  }
}

// Example usage:
const agent1 = new FieldAgent("Echo", 2.1, "Sector 7");
const agent2 = new FieldAgent("Nova", 3.4, "Sector 3");

console.log(agent1.getStatus());
console.log(agent2.getStatus());

const latest = FieldAgent.latestVersion(agent1, agent2);
console.log("Latest Version:", latest.getStatus());