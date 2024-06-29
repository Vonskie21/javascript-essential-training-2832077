/**
 * Practice: Making classes and objects
 *
 * - Find a type of object you have more than one of in your house (eg. clothing, writing tools, etc).
 * - Create a class describing this object type - its properties and methods.
 * - Create several objects using the class.
 * - Test the objecs by calling their properties and using their methods in the console.
 */
import Backpack from "./Backpack.js";

const everydayPack = new Backpack(
  "Everyday Backpack",
  40,
  "Black",
  5,
  40,
  40,
  false
);

console.log(everydayPack);

const schoolBackpack = new Backpack(
  "School Backpack",
  35,
  "Blue",
  20,
  30,
  30,
  true
);

console.log(schoolBackpack);

class HikingBackpack extends Backpack {
  constructor(
    name,
    volume,
    color,
    pocketNum,
    strapLengthL,
    strapLengthR,
    lidOpen,
    hydrationCapacity
  ) {
    super(name, volume, color, pocketNum, strapLengthL, strapLengthR, lidOpen);
    this.hydrationCapacity = hydrationCapacity;
  }
}

const mountainBag = new HikingBackpack(
  "Mountain Backpack",
  60,
  "Green",
  10,
  40,
  40,
  true,
  20
);

console.log(mountainBag);
