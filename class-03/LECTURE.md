# Class 03

## Warm-up
- We spot a `for` `in` loop

```js

for (var doc in DOCTORS) {
  console.log(doc['actors']);
}
```

- Prints names from a 'list' of 'dictionaries';
- returns the length of the 'list';

## Review
- Jquery data fetching and selection / event stuff.
  - See review folder.

## Array.sort
- Sorting an array in place.

```js
const myArray = [1,3,5,6];
// sorts in place?
//   does change the array
//   similarly we pass it a function
  // comparison function
  if (a < b) {
    return -1 // a comes before b
  } else if (b < a) {
    return 1 // b comes before a
  } else {
    return 0 // don't rearrange.
  }
});


```

## Flexbox
- Responsive layouts with flex:
- Selects and tells the contents how they should behave.
  - Consistent set of rules.


```html
<body>
  <div class="flex">
    <img>
    <img>
    <img>
  </div>
</body>
```

```css

.flex {
  /* lives as a display rule */
  display: flex;
  flex-direction: column; /* sets the main axis */
  justify-content: space-around; /* aligns elements along the main axis */
  align-items: flex-start; /* alsigns elements alnog the secondary axis */
}
```

## Templates / Templating Engine
- What is a templating engine
  - Grabbing data from js / json => js
  - Inject values into speificied markup.
  - JQuery sort of does this, but there's still too much work.

```html

<body>
  <section id="image-template">
    <h2></h2>
    <p></p>
  </section>
</body>
```

```js

const template = $('#image-template').html();

const values = {name: 'Jacob'};

const newSection = template;
newSection.find('h2').text(values.name);

```

 - The engine will facilate all of this

```html

<body>
  <section id="image-template">
    <h2>{{values.name}}</h2>
    <p></p>
  </section>
</body>

```


```js
const template = $('#image-template').html();

Engine.render(template, values);
```

- Mustache!!
