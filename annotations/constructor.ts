// class Plane {
//   color: string;

//   constructor(color: string) {
//     this.color = color;
//   }
// }

// const plane = new Plane('orange')
// console.log(plane.color)


//this way saves syntax with using the word color
class Plane {
  constructor(public color: string) {
  }
}

// class Jet extends Plane {
//   constructor(public wheels: number) {
//     super('red');
//   }
// }

class Jet extends Plane {
  constructor(public wheels: number, color: string) {
    super(color);
  }
}

const plane = new Plane('orange')
console.log("Plane", plane.color)

const jet = new Jet(4, 'aqua')
console.log("Jet", jet.color, jet.wheels)
