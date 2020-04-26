# Javascript Crash Course

This document is meant as a quick and dirty introduction to the Javascript knowledge that you need for this project.

If you have any suggestions for this document, please feel free to let us know.

## Table of Contents
1. [Running Javascript](#running-javascript)
1. [Javascript Syntax](#javascript-syntax)

## Running Javascript

All browsers come with a Javascript console, which can be used for quick scripting purposes, with the shortcuts as follows:

* Safari: Option+Cmd+C
* Firefox: Ctrl+Shift+K (Windows/Linux) or Cmd+Option+K (Mac)
* Chrome: Ctrl+Shift+J (on Windows/Linux) or Cmd+Option+J (on Mac). 

We can also use the `node` command line tool by running `node`.

For longer scripts, it is recommended to create a javascript file, and running it with `node file.js`.

## Javascript Syntax

1. Semicolons are optional!

2. The primitive data types are as follows:
    * `string`
    * `boolean`
    * `null`
    * `undefined`
    * `number`
    * `symbol`

3. Everything that is not the above data type is an `Object`.

4. Equality is checked via triple equals `===`, and not-equals is checked by `!==`.

5. Javascript also has arrays and objects (maps).

``` javascript
const arr = [1,2,3]
const arr2 = new Array(3) // [<3 empty items>]

const person = {
    name: 'Bob',
    age: 2
}
```

6. Javascript is a dynamically typed language, where the variable types are inferred at runtime.

7. Javascript functions can be done in three ways:

```javascript
function inc1(x) {
    return x + 1;
}

const inc2 = (x) => {
    return x + 1;
}

const inc3 = (x) => x + 1;
```

8. Javascript allows for destructuring:
```jsx
const obj = {a: 1, b: 2, c: 3}
const {a, b} = obj
console.log(a) // 1
console.log(b) // 2
console.log(c) // undefined

// Javascript sees obj, and infers it to be {a: 1, b: 2, c: 3}, and only takes out the relevant keys, and creates variables of the same name.

// Same goes for arrays
const arr = [1, 2, 3]
const [d, e] = arr
console.log(d) // 1
console.log(e) // 2

// This is very helpful for jsx components, since

<MyComponent a={1} b={2} />

// Looks for the MyComponent function, and passes in {a: 1, b: 2} as the variable, and we can do:

const MyComponent = ({a, b}) => {
    return <div>{a + b}</div> 
}
```
9. Javascript spread operator
```javascript
function sum(x, y, z) {
  return x + y + z;
}

const numbers = [1, 2, 3];

console.log(sum(...numbers));
// expected output: 6

const obj1 = { foo: 'bar', x: 42 };
const obj2 = { foo: 'baz', y: 13 };

const clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

const mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }
```

