# CPRG 210 Day 8

## Form Submission Event Listeners
- We could use an `onsubmit` attribute to invoke a validate script but it's not a great way to add an event listener (which is what `onclick` does). The `addEventListener()` function is a better way to do this.
- callbacks
  - definition: a function passed to another function, which we assume will be invoked at some point
  - source: [Learn and Understand Node JS](https://www.udemy.com/course/understand-nodejs/) (Paid Udemy Course)
- `element.addEventListener(event, eventHandler);`
  - In the above statement, `eventHandler` is a callback function that is invoked whenever the specified `event` happens.
  - See the [MDN Event Reference](https://developer.mozilla.org/en-US/docs/Web/Events) for available `event` options
- Today we'll be covering the `submit` event.

## Activity
Break into pairs. Refactor [`subscribe-onsubmit.html`](starter/subscribe-onsubmit.html) to instead use `element.addEventListener()`. The [refactored code](../d07/spoilers/js/button-refactored.js) has example code you can follow.

## Pseudo-classes
See [UI Pseudo-classes](https://developer.mozilla.org/en-US/docs/Learn/Forms/UI_pseudo-classes)
- `:hover`
- `:active`
- `:focus`
- `:valid` and `:invalid`
  - `element.setCustomValidity()` can be used to toggle this setting
  - See [this StackOverflow thread](https://stackoverflow.com/questions/10777970/can-i-mark-a-field-invalid-from-javascript) for details
- `:required` and `:optional` (default)
- `:enabled` and `:disabled`
- `:checked`
  - for checkboxes and radio buttons

## Pseudo-elements
- `::before`
- `::after`

## HTML5 Form Validation
- `type`
  - `email`
  - `number`
  - `tel`
  - etc
- `required`
- `min` too small (number)
- `max` too large (number)
- `minLength` too short (string)
- `maxLength` too long (string)
- `pattern` uses regular expressions

## Activity: Group Lab
Break into your groups. Review the form requirements for your assignment. What validation does the form(s) require? How will you implement it?

## Resources
- MDN
  - [Your First HTML Form](https://developer.mozilla.org/en-US/docs/Learn/Forms/Your_first_form)
  - [Client-side Form Validation](https://developer.mozilla.org/en-US/docs/Learn/Forms/Form_validation)
- Article: [Form Validation with Javascript](https://www.the-art-of-web.com/javascript/validate/)
- Video: [Form Validation with Javascript](https://www.youtube.com/watch?v=8cb4auJt1TA)
- Article: [Options for Handling Static Form Submissions](https://www.freecodecamp.org/news/handling-static-forms-the-client-side-way/)