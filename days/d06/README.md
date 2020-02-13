# CPRG 210 Day 6
## Introduction to Javascript
- Hello Dobbie! Introduction to the console.
  - expressions: a piece of code that returns a value
    - values
      - primitives
        - undefined
        - null
        - boolean
        - number
        - string
        - symbol
      - complex
        - lists
        - functions
        - objects
  - variables: a type that has a name (i.e. memory address)
    - declaration vs assignment
    - `const` vs `let` vs `var`
  - operators
    - arithmetic
    - comparison
    - logical
    - concatenation
  - coersion: when js "coerces" one variable type into another type automatically 

### Activity: Free Code Camp
- Complete some challenges in [Introduction to Javascript](https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-javascript/). Stop when you get to "Store Multiple Values in one Variable using JavaScript Arrays". Skip around as needed.

### Adding js to an index file
- `script` and `src`
- DOM considerations
- No one gets fired for putting their `script` just before the `</body>`
- put your code in a `js` directory

### Changing content with Javascript
- assigning an element to a variable using `document.getElementById()`
- introduction to the DOM element
- [`innerHTML` vs `innerText` and `textContent` properties](https://stackoverflow.com/questions/24427621/innertext-vs-innerhtml-vs-label-vs-text-vs-textcontent-vs-outertext)
- live code: 

### Activity: Changing the text of an `h1`
Centre a `h1` element on an empty page with the text "Hello [year]!". Using a linked javascript file, change the content of `[date]` to the current year using the following:
  - `id` attribute to declare a `h1` variable
  - `innerText` property of the `h1` variable
  - `new Date()`
    - see [Everything You Need to Know About Date in JavaScript](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/)
  - Bonus: Try changing the page title to the same text.
  - Super Duper Bonus: Try incrementing the year if the current month is December.

## `<button>`
If we have time... [button vs input](https://stackoverflow.com/questions/37736056/button-type-button-vs-submit).