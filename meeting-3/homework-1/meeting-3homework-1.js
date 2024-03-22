class Vechile {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}

class Car extends Vechile {
  constructor(make, model, year) {
    super(make, model)
    this.year = year;
    this.owner = [];
  }

  removeOwner = function (person) { this.owner = this.owner.filter(owners => owners != person) };
  addOwner = function (person) { this.owner.push(person) };
  getCarInfo = function () { return `${this.make} ${this.model} released in ${this.year}` };
  getOwnersCount = function () { return this.owner.length };
  getOwnerNames = function () {
    let names = [];
    this.owner.forEach(item => names.push(item.fullName()));
    return names
  };
  getFullInfo = function () { return `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} person owns this car. These are -  ${this.getOwnerNames()}` };
}

class Person {
  constructor(name, surname, age, gender, cars = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
  }
  fullName = function () { return `${this.name} ${this.surname}` };
  countCars = function () { return this.cars.length };
  buysCar = function (car) { this.cars.push(car); car.addOwner(this) };
  sellsCar = function (car) { this.cars = this.cars.filter(item => item != car); car.removeOwner(this) };
  getAllCarsInfo = function () {
    return `${this.name} owns these cars: ${this.cars.map(carsFullInfo => carsFullInfo.getCarInfo()).join(', ')}`;
  }

}


let daniel916 = new Person("Daniel", "Barbakadze", 21, "M", []);
let ilona = new Person("Elon", "Musk", 30, "M");
let duti_picoti = new Car("BMW", "525", "1999");
let stodevianosto = new Car("Mercedes", "E190", 1991);

daniel916.buysCar(duti_picoti); // adds passed car
daniel916.buysCar(stodevianosto); // adds passed car
daniel916.sellsCar(duti_picoti); // removes passed car
ilona.buysCar(stodevianosto); // adds passed car
ilona.buysCar(duti_picoti); // adds passed car

console.log({
  daniel: {
    fullName: daniel916.fullName(),
    countCars: daniel916.countCars(),
    getAllCarsInfo: daniel916.getAllCarsInfo(),
  },
  elon: {
    fullName: ilona.fullName(),
    countCars: ilona.countCars(),
    getAllCarsInfo: ilona.getAllCarsInfo(),
  },
  duti_picoti: {
    getOwnersCount: duti_picoti.getOwnersCount(),
    getOwnerNames: duti_picoti.getOwnerNames(),
    getFullInfo: duti_picoti.getFullInfo(),
    getCarInfo: duti_picoti.getCarInfo(),
  },
  stodevianosto: {
    getOwnersCount: stodevianosto.getOwnersCount(),
    getOwnerNames: stodevianosto.getOwnerNames(),
    getFullInfo: stodevianosto.getFullInfo(),
    getCarInfo: stodevianosto.getCarInfo(),
  },
});

