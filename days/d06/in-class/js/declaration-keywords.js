// Easy (and not recommended, but ok for now) way to declare and assign an element as a variable: set an id attribute on the element.
// console.log(output);

/****************/
/* Classic: var */
/****************/

// Declaring a variable the classic way. Still used a lot but is gradually being replaced by const and let
var a;
console.log(a);

// Assigning a variable
a = 5;
console.log(a);
// Re-assigning a variable
a = 10;
console.log(a);


/*****************/
/* "Best": const */
/*****************/

// Error: you have to assign a const when you declare it
// const b;

// Totally fine
const b = 6;
console.log(b);

// Error: can't re-assign a constant
// b = 10;

/********************/
/* "Next Best": let */
/********************/

let c = 8;
console.log(c);

// Re-assigning totally fine
c = 10;
console.log(c);

// NEVER declare without a keyword!
d = 9;
console.log(d);