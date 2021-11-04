# JS Basics løsningsforslag

## 1. Sum av liste

```js
const tall = [1, 6, 3, 9, 8];

function summerTall(tall) {
  let sum = 0;
  for (let i = 0; i < tall.length; i++) {
    sum += tall[i];
  }
  console.log(sum);
}

summerTall(tall);
```

## 2. Utlisting av persondata

```js
const a = { name: "Patrick Monslaup", age: 29 };
const b = { name: "Gøran Humlestøl", age: 28 };

const people = [a, b];

for (let index = 0; index < people.length; index++) {
  const person = people[index];
  console.log(person.name + " is " + person.age + " years old");
  // or with template strings: console.log(`${person.name} is ${person.age} years old`);
}
```

## 3. Kondisjonell utlisting

```js
const a = { name: "Patrick Monslaup", age: 29 };
const b = { name: "Gøran Humlestøl", age: 28 };

const people = [a, b];

for (let person of people) {
  if (person.age > 28) {
    console.log(`${person.name} is ${person.age} years old`);
  }
}
```

## 4. Finn personer etter personnummer

```js
const a = { name: "Patrick Monslaup", age: 29, id: 12345612345 };
const b = { name: "Gøran Humlestøl", age: 28, id: 65432154321 };

const people = [a, b];

function getNameById(id) {
  for (let person of people) {
    if (person.id === id) {
      return person.name;
    }
  }
  return null; // eller undefined
}

console.log(getNameById(65432154321));
```

## 5. Hente ut personer fra objekt i stedet for en array

```js
const people = {};
const a = { name: "Patrick Monslaup", age: 29, id: 12345612345 };
const b = { name: "Gøran Humlestøl", age: 28, id: 65432154321 };

people[a.id] = a;
people[b.id] = b;


function getNameById(id) {
    return people[id].name;
}

// Alternativt med lambda syntaks:
const getNameById = (id) => people[id].name;
```
