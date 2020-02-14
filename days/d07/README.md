# CPRG 210 Day 7
## `<button>`
See [button vs input](https://stackoverflow.com/questions/37736056/button-type-button-vs-submit)

## Functions and onclick
See the MDN Reference: [DOM onevent handlers](https://developer.mozilla.org/en-US/docs/Web/Guide/Events/Event_handlers)
- events and event handlers
- onclick attribute
- functions
  - declaring (defining a function) vs invoking (running a function)

## Activity: Add a counter to a click handler
Break into pairs (one group of 3 allowed if odd number). Copy the 'starter' files in today's folder and complete up to Step 4.

## Arrays, classList and if/else
- methods/properties vs functions/variables
- if/else
  - boolean expressions
  - logical operators
- `classList` (Video: [Class List (classList) Property](https://www.youtube.com/watch?v=XYzSyPlY7_E))
  - `.contains()`
  - `.add()`
  - `.remove()`
  - `.length`

## Activity: Add a class toggle
Break into *different* pairs. Continue with today's starter files and complete Step 5 onward.

## Refactoring: cleaning up our code
If we have time...
1. Remove all your ids and use `document.querySelector()`
2. Remove Step 3 and iterate your currentCount when you assign it to the element
3. Use your new favourite `classList` method to simplify your if/else code
4. Advanced: remove your `button` `onclick` attribute and instead use `button.addEventListener()` in your button.js file
5. Pro Tip: wrap all your js into an init() function and invoke it when the page loads. This protects your variables from outside code by wrapping them in their own scope.