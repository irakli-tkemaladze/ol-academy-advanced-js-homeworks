const carBehavior = {
  removeOwner: function (person) { this.owners = this.owners.filter(owner => owner != person) },
  addOwner: function (person) { this.owners.push(person) },
  getCarInfo: function () { return `${this.make} ${this.model} released in ${this.year}` },
  getOwnersCount: function () { return this.owners.length },
  getOwnerNames: function () {
    let names = [];
    this.owners.forEach(item => names.push(item.fullName()));
    return names
  },
  getFullInfo: function () { return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} person owns this car. These are - ${this.getOwnerNames().join(", ")}.` }
}

function createCar(make, model, year) {
  let car = Object.create(carBehavior);
  car.make = make;
  car.model = model;
  car.year = year;
  car.owners = [];
  return car
}

const personBehavior = {
  fullName: function () { return `${this.name} ${this.surname}` },
  countCars: function () { return this.cars.length },
  buysCar: function (car) { this.cars.push(car); car.addOwner(this) },
  sellsCar: function (car) { this.cars = this.cars.filter(item => item != car); car.removeOwner(this) },
  getAllCarsInfo: function () {
    return `${this.name} owns these cars: ${this.cars.map(carsFullInfo => carsFullInfo.getCarInfo()).join(', ')}` + "."
  }
}

function createPerson(name, surname, age, gender, cars = []) {
  let person = Object.create(personBehavior);
  person.name = name;
  person.surname = surname;
  person.age = age;
  person.gender = gender;
  person.cars = cars;
  return person
};


module.exports = { createPerson, createCar }
