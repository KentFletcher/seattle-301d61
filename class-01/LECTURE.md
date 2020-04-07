# Class 01

## Lab Review
 - Data Structures and Algorithms Repo:
   - This repos gives us a place to put formal code challenges.
- ES6:
  - Ecma-Script version 6;
  - Adds some new features to the language:
  - Keywords : let  / const for varibles;
    - let: Same thing as var, but this is locally scoped (to the function is was created in);'
    - const: varibles defined with const can't be reassigned.

```js

const num = 1000;

// should get an error
num = 2000;

let name = "Jacob";

function printJacob() {
  let name = 'Jacob';
  console.log(localName);
}

console.log(name); // this should still be "Jacob";
```

  - Arrow function
    - More consice way of creating a function


```js

// old js
function func(param1) {
  return param1;
}

// newer js
const funcES6 = (param1) => {
  return param1;
}

// this does the same thing
const funcES6 = (param1) => param1
```

- Besides the syntax, what's changed?
  - Not good with constructor, or a method.
  - No binding the "this".
    - Inside of a contructor function, or method definition: we need a context of "this' so we can refer to an object we have instantiated.
    - "This" comes from the outer scope.

## Code Challenge

- Built in array method: forEach()
  - iterates over the contents of an array, and perform some logic for each item within.

```js

var array = [1,2,3,4,5];

// out iterative methodology
for(let y = 0; y < array.length; y++) {
  array[i]++;
}

console.log(array);

function incrementValue(arrayItem) {
  arrayItem++;
}

// How readable is this!!!
array.forEach(incrementValue);

// gives you both the value of the item, and the idx number;
array.forEach((arrayItem, idx) => {
  array[idx]++; // this mutates the array, be careful of mutations!!
});
```

## SMACSS

- What is SMACSS (Scalable and Modular Archeture for CSS):
  - Breaking up our CSS.
  - Organize our CSS into places with seperate concerns.
  - Breaks our styling into 5 general categories:

```html
<body>
  <header>
    <aside class="header-content">
      <img>
      <p>
    </aside>
  </header>
  <main>

  </main>
  <footer>

  </footer>
</body>
```

- base: how do all of my elements need to look on their own.

```css

p {
  font-family: "Roboto";
  font-size: 24px;
}

```

  - module: How do my lists need to look, how about, navigation bars, aside component.

```css

.header-content p {
  font-size: 30px;
}

```

  - layout: Large sections of my iterface. How should my containers behave. sections, divs, main, footer, header.

```css

header {

}

main {

}

footer {

}

@media (min-width: 350px) {
  body {
    margin: 15px;
  }
}

@media (max-width: 350px) {
  body {
    margin: 0;
  }
}

```

- Theme(optional): high level, esoteric styling specs.
  - What colors, feel, shadows. Aesthetics.
- State(optional): Specific stylings for different state changes.
  - class="expansion-menu" => class="expansion-menu open"
  
```css
.expansion-menu.open {
  height: 100px;
}
```

## Responsive Web Design

- A browser can run on tons of devices:
  - Phones: screen size that is really small (400px / 700px);
  - Tablet: screen size (700, 1000);
  - Desktop: (1000 - beyond);
- We want to focus on phones, because their the most prevalent.
  - Mobile first mindset.
  - Work our way out to the desktop.
- How is this possible:
  - Media Queries `@media`

DEMO time!
- Building a mobile first Site.