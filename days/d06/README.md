# CPRG 210 Day 6
## Introduction to Javascript
- Hello Dobbie! Introduction to the console.
  - expressions: a piece of code that returns a value
    - values
      - primitives
        - undefined
          - value of a variable that is declared but not assigned.
          - Although you can, never explicitly set a variable to `undefined`
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
- live code: Hello Width!

### Activity: Changing the text of an `h1`
Centre a `h1` element on an empty page with the text "Hello [year]!". Using a linked javascript file, change the content of `[year]` to the current year using the following:
  - `id` attribute to declare a `h1` variable
  - `innerText` property of the `h1` variable
  - `new Date()`
    - Start by assigning the number 2020 to a variable called currentYear.
    - When you're ready, see [Everything You Need to Know About Date in JavaScript](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/) to learn how to make currentYear dynamic: if you open this page a year from now, the number should be 2021.
  - Bonus: Try changing the page title to the same text.
  - Super Duper Bonus: Try incrementing the year if the current month is December.

## `<button>`
If we have time... [button vs input](https://stackoverflow.com/questions/37736056/button-type-button-vs-submit).

## Proj 207 Groups
[Assignment Details](../../assignments/proj-207/Project_Workshop_1 _CPRG 210_HTML _JavaScript.doc)

You will be assigned into groups of 3-4. Harvey Peters will assign the due date. It will be the 3rd week of March.
