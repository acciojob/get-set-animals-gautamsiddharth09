//complete this code
class Animal {
	constructor (species ){
		this._species = species ;
	}

	get species () {
		return this._species;
	}

	makeSound() {
		console.log(`The ${this._species} make a sound`)
	}
}

class Dog extends Animal {
	constructor(species){
		super(species)
	}

	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	constructor(species){
		super(species)
	}
	pourr(){
		console.log("pourr")
	}
}

const myCat = new Cat("Siamese");
myCat.makeSound();

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;















