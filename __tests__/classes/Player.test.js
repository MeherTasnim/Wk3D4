const Player = require("../../classes/Player");
const Item = require("../../classes/Item");

describe("Player", () => {
  it("should add an item to the inventory IF it is not already present", () => {
    const player = new Player("sword", "John", "human", "forest");
    const item = new Item("potion", 5);
    player.addItem(item);
    expect(player.inventory).toContain(item);
  });

  it("should not add an item to the inventory if it is already present", () => {
    const logSpy = jest.spyOn(global.console, "log");
    const player = new Player("sword", "John", "human", "forest");
    const item = new Item("potion", 5);
    player.inventory.push(item);
    player.addItem(item);
    expect(player.inventory).toHaveLength(1);
    expect(logSpy).toHaveBeenCalledWith(`${item.name} already in inventory.`);
  });
});
