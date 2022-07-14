'use strict';

const cars = ['Ford', 'Chevy', 'Tesla', 'Rivian'];
console.log(cars.length);

const moreCars = ['Subaru', 'Toyota', 'Mitsubishi', 'Honda'];

const totalCars = cars.concat(moreCars);
console.log(totalCars);

const hondaIndex = totalCars.indexOf('Honda');
console.log(hondaIndex);

const lastIndexFord = totalCars.lastIndexOf('Ford');
console.log(lastIndexFord);

const stringOfCars = totalCars.join();
console.log(stringOfCars);

const carsFromString = stringOfCars.split(',');
console.log(carsFromString);

const carsInReverse = totalCars.reverse();
console.log(carsInReverse);

const carsAlphabetical = carsInReverse.sort();
console.log(carsAlphabetical);

const pets = ['dog', 'cat', 'fish', 'rabbit', 'snake', 'lizard', 'bird'];
const snakeLizard = pets.slice(4, 6);
console.log(snakeLizard);

const removedReptiles = pets.splice(4, 2);
console.log(pets);

const removedPet = pets.pop();
console.log(removedPet);
console.log(pets);

pets.push(removedPet);
console.log(pets);

console.log(pets.shift());
console.log(pets);
console.log(pets.unshift('dogs'));
console.log(pets);

const numbers = [23, 45, 0, 2, 8, 44, 100, 1, 3, 91, 34];

numbers.forEach((number, index) => {
  numbers[index] = number + 2;
});
console.log(numbers);
