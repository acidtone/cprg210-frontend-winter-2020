// Create a date object and assign it to a variable
const currentDate = new Date();

// Replace the [date] placeholder by aassigning the current year to innerText. Note: only use innerHTML when you need to assign/retrieve HTML content
year.innerText = currentDate.getFullYear();

// Change the title to match. Note: HTML elements are not allowed inside the title element (title can have no children).
document.title = "Hello " + currentDate.getFullYear() + "!";