const Person = require("./Person.js");

class Player extends Person {
    constructor(weapon, name, type, location) {
        super(name, type, location);
        this.weapon = weapon;
    };
};

module.exports = Player;