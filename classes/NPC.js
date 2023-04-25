const Person = require("./Person.js");

class NPC extends Person {
    static NPC_TOTAL = 0;

    constructor(name, type, location) {
        super(name, type, location);
        NPC.NPC_TOTAL++;
    }

    static compareType(npc, player) {
        if (npc.type === player.type) {
            return `We're both ${this.type}.`;
        } else {
            return "We're not the same type";
        }
    }
}

module.exports = NPC;