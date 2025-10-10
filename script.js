//complete this code
class Animal {
	constructor (species ){
		this.species = species ;
	}

	makeSound() {
		console.log(`${species} make a sound`)
	}
}

class Dog extends Animal {
	bark(){
		console.log("woof")
	}
}

class Cat extends Animal {
	pour(){
		console.log("pourr")
	}
}

// Do not change the code below this line
window.Animal = Animal;
window.Dog = Dog;
window.Cat = Cat;
