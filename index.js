// implementing encapsulation
const Animal = require('./Animal');

//implementing inheritance
class Lion extends Animal {
  constructor(name, height, color) {
    super(name, height);
    this.color = color;
  }
  intro() {
    console.log(`Hi! I'm ${this.name}, I have ${this.color} furs, I'm ${this.height}feet tall, and I'm from Pride Rock!`);
  }
}


class Hyena extends Animal {
	constructor(name, height, color, dentition) {
		super(name, height);
		this.color = color;
		this.dentition = dentition;
	}
	hello() {
		console.log(`Hi! I'm ${this.name}, I'm ${this.height}feet tall, I have and I have the strongest ${this.dentition} in the The wild.`);
	}
}

let son = new Lion("Simba", 2, "golden");
//son.intro();

let puppy = new Hyena("Baddo", 2, "dotted brown", "jaw");
//puppy.hello();

// polymorphism
const allAnimals = [son, puppy];

for (let i=0; i < allAnimals.length; i++){
    allAnimals[i].intro();
}
