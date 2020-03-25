class Vehicle {
  drive(): void {
    console.log('chugga chugga')
  }
  honk(): void {
    console.log('honk honk')
  }
}

class Car extends Vehicle {
  //this drive function overrides the Vehicle class drive function
  drive(): void {
    console.log('vroom')
  }
}

const car = new Car()
  car.drive()
  car.honk()

const vehicle = new Vehicle();
  // vehicle.drive()