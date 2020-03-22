let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined; 

//built in objects
let now: Date = new Date();

//Array
let colors: string[] = ['red', 'green', 'blue'];
// let numbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

//Classes
class Car {

}

let car: Car = new Car();

//Object literal
let point: {x: number; y: number} = {
  x: 10,
  y: 20
}

//Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i)
}
//expect function tot ake in an argument i which is a number and return void

//When to use annotations

// 1.Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: {x: number; y: number} = JSON.parse(json);
console.log(coordinates) //{x: 10, y:20};
//Avoid using 'any' at all costs

// 2. When we declare variable on one line and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord: boolean;

for (let i = 0; i <= words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
    console.log(foundWord)
  }
}

// 3.  Variable whose type can not be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i <= numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i]
  } else {
    numberAboveZero = false
  }
}


