class Person {
    #health = 100;

  constructor(name, type, location) {
    this.name = name;
    this.type = type;
    this.location = location || [0, 0];
  }

  introduce() {
    return `Hello, my name is ${this.name} and I'm a ${this.type}.`;
  }

  updateX(val) {
    this.location[0] += val;
  }

  updateY(val) {
    this.location[1] += val;
  }

  getHealth() {
      return `${this.#health}hp`;
  }

  drinkPotion(val) {
      if (this.#health + val < 100) {
          this.#health += val;
        } else {
          this.#health = 100;
        }
  }

  takeDamage(val) {
      if (this.#health - val > 100) {
          this.#health -= val;
        } else {
          this.#health = 0;
        }
  }
}

module.exports = Person;