class Vehicle {
  // public drive(): void {
  //   console.log('chugga chugga')
  // }

  protected honk(): void {
    console.log('honk honk')
  }

  color: string;
}

class Car extends Vehicle {
  //this drive function overrides the Vehicle class drive function

  //by making private can only call drive function from within class
  private drive(): void {
    console.log('vroom')
  }

  startDrivingProcess(): void {
    this.drive();
  }
}

const car = new Car()
  car.startDrivingProcess();
  // car.honk()

const vehicle = new Vehicle();
  // vehicle.drive()