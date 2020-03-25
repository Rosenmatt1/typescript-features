const coolCars:string[] = []

//dont need type for this
const carMakers = ['ford', 'toyota', 'chevy'];

const dates = [new Date(), new Date()];

//to type an array with arrays
const carsByColor: string[][] = []

const carsByMake = [ ['Ford f150'], ['corolla'], ['camaro']]

// Help with inference when extracting values
// const car = carMakers[0];
const myCar = carMakers.pop()

//prevent incompatible values
carMakers.push(100);

//help with'map'
carMakers.map((car: string): string => {
  return car.toUpperCase()
})

//flexible types
const importantDates: (Date | string)[] = [new Date(), '2030-10-10']
importantDates.push('2010-10-10')
importantDates.push(new Date())


