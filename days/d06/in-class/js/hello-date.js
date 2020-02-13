// Create a date object and assign it to a variable
// First step: just use a static year for now
const currentYear = 2020;

// Replace the [date] placeholder by assigning the current year to innerText of the span element. Note: only use innerHTML when you need to assign/retrieve HTML content.

// heading is declared and assigned when you add an id="heading" to the h1 element
console.log(heading);
console.log(heading.innerText);
console.log(heading.innerHTML);

heading.innerText = currentYear;

// Change the title to match with concatenation. Note: HTML elements are not allowed inside the title element (title can have no children).
