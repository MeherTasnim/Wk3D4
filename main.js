const Person = require("./classes/Person.js");
const Player = require("./classes/Player.js");
const NPC = require("./classes/NPC.js");
const Item = require("./classes/Item.js");

function main() {
  const player = new Player("Magic", "Rincewind", "Wizard");
  const book = new Item("Spells", 12);
  player.addItem(book);
  player.addItem(book);
}

main();