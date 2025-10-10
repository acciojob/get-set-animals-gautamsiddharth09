//complete this code
class Animal {
	constructor (species ){
		this.species = species ;
	}

	get species () {
		return this.species;
	}

	makeSound() {
		console.log(`The ${species} make a sound`)
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
	pour(){
		console.log("pourt")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
