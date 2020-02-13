// document.getElementId() is one of the oldest methods. It finds the element that has the supplied id attribute and returns it (making this an expression). The following line of code will find the h1 element and assign it to a variable named 'h1'

const h1 = document.getElementById('width');

// innerText contains the content that is currently inside the element
console.log(h1.innerText);

// innerText can be re-assigned and the new value (in this case: "Width: [current viewport width]"). innerWidth is a global variable that the browser creates for you automatically.
h1.innerText = "Width: " + innerWidth;