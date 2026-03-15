class Vehicle {
  constructor(model, speed) {
    this.model = model;
    this.speed = speed;
  }

  getInfo() {
    return `Model: ${this.model}, Speed: ${this.speed} km/h`;
  }
}

class ElectricVehicle extends Vehicle {
  constructor(model, speed, batteryLife) {
    super(model, speed);
    this.batteryLife = batteryLife;
  }

  getInfo() {
    return `Model: ${this.model}, Speed: ${this.speed} km/h, Battery Life: ${this.batteryLife} hrs`;
  }

  static compareSpeed(v1, v2) {
    return v1.speed > v2.speed ? v1 : v2;
  }
}

// Example usage:
const car1 = new Vehicle("Toyota Corolla", 180);
const car2 = new ElectricVehicle("Tesla Model 3", 200, 12);

console.log(car1.getInfo());
console.log(car2.getInfo());

const fasterCar = ElectricVehicle.compareSpeed(car1, car2);
console.log("Faster Vehicle:", fasterCar.getInfo());
