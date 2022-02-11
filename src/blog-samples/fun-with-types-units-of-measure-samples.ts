// Our base Unit of Measure Type
//  Not having the extends string on the U parameter is possible
//  But nullable types don't work because all nullable types can be null.
type UOM<T, U extends string> = T & { __UOM: U };
// We want to be able to have string IDs that have a unit of measure
type ID<U extends string> = UOM<string, U>;
export type ItemID = ID<"Item">;
export type CharacterID = ID<"Character">;

export interface IItem {
  id: ItemID;
  name: string;
  description: string;
}

export interface ICharacter {
  id: CharacterID;
  name: string;
  description: string;
  items: ItemID[];
}
