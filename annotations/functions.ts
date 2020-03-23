const add = (a: number, b: number): number => {
  return a + b
}

function divide(a: number, b: number):number = {
  return a / b
}

const multiply = function(a: number, b: number):number {
  return a * b
}

const logger = (message: string): void => {
  console.log(message);
}
// Void means function has no return value or returns null

const throwError = (message:string):never => {
  throw new Error(message)
}
//never means functionw will never complete becasue throws error and will not complete function    fringe case

const forecast = {
  date: new Date(),
  weather: 'sunny'
}

const logWeather = (forecast: {date: Date, weather: string }):void => {
  console.log(forecast.date)
  console.log(forecast.weather)
}

//destructured 
// const logWeather = ({date, weather}: { date: Date, weather: string }): void => {
//   console.log(date)
//   console.log(weather)
// }
