// Hello, world!

console.log("Hello, World!");

// Variables

let count = 0;

// This can be changed
count = 1;
count++;

const name = "Gøran";

// This cannot be changed
// name = "Patrick"; <-- error

// "var" is deprecated. Do not use.
var shouldUseVar = false;

// Arrays and loops

const numbers = [1, 2, 3, 6, 7, 123, 0];

// indexed for loop
for (let i = 0; i < numbers.length; i++) {
  // string interpolation (a.k.a. template strings)
  console.log(`The number at index ${i} is ${numbers[i]}`);
}

// for-of loop - iterates elements in the list
for (let number of numbers) {
  console.log(number);
}

// for-in loop - iterates indices / keys in the list
for (let i in numbers) {
  console.log(`The number at index ${i} is ${numbers[i]}`);
}

// Prefer using for-of loops whenever possible

// Functions
function sayHello(name) {
  console.log(`Hello, ${name}`);
}

sayHello("Gøran");
sayHello("Patrick");

// Objects

const me = {
  name: "Gøran Humlestøl",
  age: 28,
};

console.log(`${me.name} is ${me.age} years old`);

// An array of people
const people = [me, { name: "Patrick Monslaup", age: 29 }];

function getFirstName(person) {
  const nameSplit = person.name.split(" ");
  return nameSplit[0]; // this function returns the first name
}

console.log(getFirstName(me));

function logUserCount(users) {
  /*
   * note: triple =, avoid using double =
   * "5" === 5 => false
   * "5" == 5 => true
   * same with != (avoid) vs. !== (use)
   */
  if (users.length === 0) {
    console.log("We have no users");
  } else if (users.length === 1) {
    console.log("We have one user");
  } else if (users.length < 1_000) {
    console.log("We have some users");
  } else {
    console.log("We have many users");
  }
}

logUserCount([]);
logUserCount([me]);
logUserCount(people);

// Add a person to the list
people.push({
  name: "Jonas Gahr Støre",
  age: 61,
});

// Objects can be changed dynamically

const superHero = {};
superHero.name = "Superman";
superHero["weakness"] = "Kryptonite";

console.log(`${superHero["name"]}'s weakness is ${superHero.weakness}`);

// Note: Alternating between syntax here is just for example, try to be consistent when writing code

// Function syntax

const functionsAreJustLikeVariables = sayHello;
functionsAreJustLikeVariables(people[2]);

const anonymousFunction = function () {
  console.log("This is often called an anonymous function");
};
anonymousFunction();

// Lambda function, often used in modern React
const lambdaFunction = () => {
  console.log("This is often called a lambda or an arrow function");
};
lambdaFunction();

/*
 * Warning: A lot of examples online are old and uses "var" and jQuery (for instance $(".lanuage-section")...). This is not recommended anymore.
 */
