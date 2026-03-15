class Vision {
  constructor(type, intensity) {
    this.type = type;
    this.intensity = intensity;
  }

  getDetails() {
    return `Type: ${this.type}, Intensity: ${this.intensity}`;
  }
}

class FutureVision extends Vision {
  constructor(type, intensity, timestamp) {
    super(type, intensity);
    this.timestamp = timestamp;
  }

  getDetails() {
    return `Type: ${this.type}, Intensity: ${this.intensity}, Timestamp: ${this.timestamp}`;
  }

  static filterByIntensity(arr, threshold) {
    return arr.filter(v => v.intensity > threshold);
  }
}

// Example usage:
const v1 = new FutureVision("Dream", 70, "2025-10-17T10:00:00Z");
const v2 = new FutureVision("Premonition", 40, "2025-10-17T11:00:00Z");
const v3 = new FutureVision("Echo", 85, "2025-10-17T12:00:00Z");

console.log(v1.getDetails());
console.log(v2.getDetails());

const strongVisions = FutureVision.filterByIntensity([v1, v2, v3], 60);
strongVisions.forEach(v => console.log(v.getDetails()));
