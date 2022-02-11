import {
  IItem,
  ICharacter,
  CharacterID,
} from "./fun-with-types-units-of-measure-samples";

describe("Given 2 items with different types on their ID", () => {
  const item = { id: "xyz" } as IItem;
  const character: ICharacter = {
    id: "xyz" as CharacterID,
    items: [],
    name: "",
    description: "",
  };

  it("when we compare their ids, it turns out false... I mean true.", () => {
    expect(item.id === character.id).toBeTruthy(); // TypeScript Error!
  });
  it("when I try and add a character to an item id list, it fails", () => {
    character.items.push("duh"); // This won't compile.
    character.items.push(character.id); // Nor will this.
    character.items.push(item.id); // this works fine!
  });
});
