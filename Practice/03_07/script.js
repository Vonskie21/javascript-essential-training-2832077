/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const bottle = {
  cap: "Screw Type",
  volumeML: 1000,
  diameterCM: 50,
  medium: "water",
};

const box = {
  length: 50,
  width: 50,
  height: 20,

  content: "shoes",
};
var query = "volumeML";

console.log(bottle.cap);
console.log("Botte", bottle[query]);
