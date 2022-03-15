"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[105],{8336:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return o},default:function(){return h}});var a=n(3366),i=(n(7294),n(4983)),r=n(262),s=["components"],o={},l={_frontmatter:o};function h(e){var t=e.components,n=(0,a.Z)(e,s);return(0,i.kt)("wrapper",Object.assign({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(r.Z,{title:"Fun with Types: Units of Measure - Wilson Gearld Mead III's Blog Posts",mdxType:"SEO"}),(0,i.kt)("h1",null,"Fun with Types: Units of Measure"),(0,i.kt)("p",null,"Units of measure are a way to tell 2 things of the same type apart in code."),(0,i.kt)("p",null,"Or another way, you can't subtract 32B0F from 6' it just doesn't make sense. You see those 2 numbers and you know you can't do that. So let's make the code know that."),(0,i.kt)("h2",null,"In TypeScript?!"),(0,i.kt)("p",null,"Yeah, I know F# and other languages in that family have actual support for Units of Measure, but I'm mostly in TypeScript land and needed them."),(0,i.kt)("p",null,"And TypeScript doesn't ",(0,i.kt)("em",{parentName:"p"},"really")," support it."),(0,i.kt)("h2",null,"Ok Convince Me..."),(0,i.kt)("p",null,"Let's devise a horrible example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},"interface IItem {\n  id: string;\n  name: string;\n  description: string;\n}\n\ninterface ICharacter {\n  id: string;\n  name: string;\n  description: string;\n  items: string[]; // Item IDs\n}\n")),(0,i.kt)("p",null,"Now the ",(0,i.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"description")," of each of those are the same type. You would use them the same way, might compare them, and might add them together in some way."),(0,i.kt)("p",null,"But those ",(0,i.kt)("inlineCode",{parentName:"p"},"id")," values? Nope. Those are really Item id and Character id. You can't add a character id to a the item list on a character ",(0,i.kt)("em",{parentName:"p"},"but the code will let you"),". This is what we want to deal with."),(0,i.kt)("p",null,"Right now this works:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const item = { id: "xyz" } as IItem;\nconst character = { id: "xyz" } as ICharacter;\n\nconst areEqual = item.id === character.id; // is true\n')),(0,i.kt)("h2",null,"That does suck, but what can we do?"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Units of Measure")," can help solve this problem."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'// Our base Unit of Measure Type\n//  Not having the extends string on the U parameter is possible\n//  But nullable types don\'t work because all nullable types can be null.\ntype UOM<T, U extends string> = T & { __UOM: U };\n// We want to be able to have string IDs that have a unit of measure\ntype ID<U extends string> = UOM<string, U>;\n\ninterface IItem {\n  id: ID<"Item">;\n  name: string;\n  description: string;\n}\n\ninterface ICharacter {\n  id: ID<"Character">;\n  name: string;\n  description: string;\n  items: ID<"Item">[];\n}\n')),(0,i.kt)("p",null,"Now that we have this set up, magic happens:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'describe("Given 2 items with different types on their ID", () => {\n  const item = { id: "xyz" } as IItem;\n  const character: ICharacter = {\n    id: "xyz" as ID<"Character">,\n    items: [],\n    name: "",\n    description: "",\n  };\n\n  it("when we compare their ids, it turns out false... I mean true.", () => {\n    expect(item.id === character.id).toBeTruthy(); // TypeScript Error!\n  });\n  it("when I try and add a character to an item id list, it fails", () => {\n    character.items.push("duh"); // This won\'t compile.\n    character.items.push(charcater.id); // Nor will this.\n    character.items.push(item.id); // this works fine!\n  });\n});\n')),(0,i.kt)("h3",null,"Why This works"),(0,i.kt)("p",null,"It's faking out the type system. The ",(0,i.kt)("inlineCode",{parentName:"p"},"& { __UOM:U}")," is the magical part. When we use ",(0,i.kt)("inlineCode",{parentName:"p"},"as")," we tell TypeScript that this object really is this type. And since there is enough overlap between ",(0,i.kt)("inlineCode",{parentName:"p"},"string")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"string & {__UOM:'Character'}")," TypeScript allows it."),(0,i.kt)("p",null,"However, that ",(0,i.kt)("inlineCode",{parentName:"p"},"& {__UOM:'Character'}")," prevents it from matching ",(0,i.kt)("inlineCode",{parentName:"p"},"& {__UOM:'Item'}")," as they can't match. While we didn't define the ","_","UOM property, it's part of the type, so TypeScript will enforce it."),(0,i.kt)("h2",null,"The tests ran fine"),(0,i.kt)("p",null,"Yeah the jest compiler doesn't seem to care. But if you clone/open ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/Rangoric/rangoric.github.io"},"my repository")," in VSCode, you will see that there are TS errors ",(0,i.kt)("inlineCode",{parentName:"p"},"/src/examples/uom.test.ts")," that a normal build will catch."),(0,i.kt)("h2",null,"Isn't that a lot of Strings that will bulk up your code"),(0,i.kt)("p",null,"TypeScript type erasure will actually remove all type information (in this case, anything outside of the string of the ID) during compilation. The tests above look like this when compiled."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},'describe("Given 2 items with different types on their ID", () => {\n  const item = { id: "xyz" };\n  const character = { id: "xyz", items: [], name: "", description: "" };\n\n  it("when we compare their ids, it turns out false... I mean true.", () => {\n    expect(item.id === character.id).toBeTruthy();\n  });\n  it("when I try and add a character to an item id list, it fails", () => {\n    character.items.push("duh");\n    character.items.push(charcater.id);\n    character.items.push(item.id);\n  });\n});\n')),(0,i.kt)("p",null,"Type Erasure is also why jest will compile the tests just fine and run them."),(0,i.kt)("p",null,"Moving on..."),(0,i.kt)("p",null,"The power of this picks up as you use it. Let's extend the character some"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'interface IRPGCharacter {\n  id: ID<"RPGCharacter">;\n  attributes: {\n    strength: UOM<number, "strength">;\n    dexterity: UOM<number, "dexterity">;\n  };\n}\n\ndescribe("Given a character with strength and dexterity", () => {\n  const character = {\n    id: "xyz",\n    attributes: { strength: 10, dexterity: 10 },\n  } as IRPGCharacter;\n  it("when we compare them, then it fails like the ids", () => {\n    expect(\n      character.attributes.strength === character.attributes.dexterity\n    ).toBeTruthy();\n  });\n});\n')),(0,i.kt)("p",null,"Again type errors start yelling at you."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const getMaxLift = (x: UOM<number, "strength">) => {\n  return x * 1000;\n};\n\ndescribe("Given a character with strength", () => {\n  const character = {\n    id: "xyz",\n    attributes: { strength: 10, dexterity: 10 },\n  } as IRPGCharacter;\n  it("when we get their max lift, then we cant use dexterity", () => {\n    const maxLift = getMaxLift(character.attributes.dexterity);\n  });\n});\n')),(0,i.kt)("p",null,"More yelling at you"),(0,i.kt)("h2",null,"Wait a second, you just used strength as a number"),(0,i.kt)("p",null,"Yes, yes I did. As soon as you go to use a unit of measure as only it's base type, it's allowed. This is because units of measure are to stop 2 different units from being adjusted with each other, but can be adjusted by a neutral unit."),(0,i.kt)("p",null,"The usual example of units of measure is:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-typescript"},'const time = 5 as UOM<number, "seconds">;\nconst distance = 10 as UOM<number, "meters">;\n')),(0,i.kt)("p",null,"You could multiply time by 5, which means it takes 5 times as long. So units of measure stop types from colliding with each other, but the base type is can still intermix with. You could make it safer by having UOM on those multipliers also, but it's not as important. ",(0,i.kt)("em",{parentName:"p"},"Unless you have a bug in that area"),". Adding the units you expect something to be when you have a bug will help make sure the types you expect are what you are dealing with."),(0,i.kt)("h2",null,"Ok, I can think of a good use for this"),(0,i.kt)("p",null,"Absolutely, so much of the time, we are dealing with complex types that end up as either number of string. This lets you add a bit of meat to those types. And with type erasure, it comes with very little cost. I've found it useful for dealing with bugs with different IDs (hence using that as an example) because they are all strings, and with this I can make them different under the TypeScript hood. Cause I mean item.id starts looking the same the more you use it."),(0,i.kt)("h2",null,"Read More"),(0,i.kt)("p",null,"This code is based on how F# does ",(0,i.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/dotnet/fsharp/language-reference/units-of-measure"},"units of measure"),"."),(0,i.kt)("p",null,"An alternative, that is especially useful if you are doing more math, are the Unit capabilities of ",(0,i.kt)("a",{parentName:"p",href:"https://mathjs.org/docs/datatypes/units.html"},"math.js"),"."))}h.isMDXComponent=!0},3366:function(e,t,n){function a(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=component---src-pages-blog-fun-with-types-units-of-measure-mdx-4df816fa74c3b8ffb6f0.js.map