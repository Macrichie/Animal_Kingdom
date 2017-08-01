class Animal {
  constructor(name, height) {
    this.name = name;
    this.height = height;

  }

  intro() {
    console.log(`Hi! I'm ${this.name} from the Animal kingdom!`);
  }
}

module.exports = Animal;
