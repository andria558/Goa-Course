class Satellite {
  constructor(id, orbitType) {
    this.id = id;
    this.orbitType = orbitType;
  }

  getDetails() {
    return `ID: ${this.id}, Orbit Type: ${this.orbitType}`;
  }
}

class MilitarySatellite extends Satellite {
  constructor(id, orbitType, encryptionLevel) {
    super(id, orbitType);
    this.encryptionLevel = encryptionLevel;
  }

  getDetails() {
    return `ID: ${this.id}, Orbit Type: ${this.orbitType}, Encryption Level: ${this.encryptionLevel}`;
  }

  static countByOrbit(arr, type) {
    return arr.filter(sat => sat.orbitType === type).length;
  }
}

// Example usage:
const sat1 = new MilitarySatellite("SAT-001", "LEO", "High");
const sat2 = new MilitarySatellite("SAT-002", "GEO", "Medium");
const sat3 = new MilitarySatellite("SAT-003", "LEO", "Low");

console.log(sat1.getDetails());
console.log(sat2.getDetails());

const countLEO = MilitarySatellite.countByOrbit([sat1, sat2, sat3], "LEO");
console.log("LEO Satellites:", countLEO);
