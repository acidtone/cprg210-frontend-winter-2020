# HTML and CSS Assignment
This task helps you become familiar with the fundamentals of JavaScript by enhancing a web page to provide JavaScript functionality.

## Due
TBD

## Directions
In this exercise you will customize the web pages you have been working on earlier in this course and enhance the page to provide JavaScript functionality.

### register.html
- Set up a web form for customers to enter their name, address, city, province, postal code, and anything else that you want to include.
- Modify your web form to ask for confirmation before submitting or resetting. Put an onClick event handler on the submit and reset buttons of the form. When these buttons are clicked, confirm dialogs should pop open asking them if they really want to do this. If the user clicks “ok”, the submit or reset continue, otherwise they should be cancelled.

### index.html
- Put a script tag in the head section of your main page and create two arrays. The first will have some image objects (limit this to a reasonable number, perhaps 4 or 5 images), and the second array will have strings with descriptions of each of the images.  When the body of the page loads, loop through the arrays and get each image and the corresponding description and display them in a table row, one row per image. 
- For extra challenge: Instead of using two table cells per row, just create one cell with the description. Add a `<div>` tag, and add a mouseover event handler to each table cell. When the mouse pointer moves over the cell pass it’s index number to a function. In the function, place an image tag into the `<div>` tag’s innerHTML property. Set the `<img>` tag’s source to the source of the image array’s image object for that index.
- If anything is wrong with the form data, stop the submission, otherwise send it to http://localhost/bouncer.php. 
- Add another array to your page that will have a URL of a website for each image in the images array. Try to find websites that fit well with the images that you are using.
- Modify your image and description table. For each image, include a mouseclick handler that will call a function to open a new window and start a timer that will close the window after a few seconds.
- Whenever you open a new window in step 2 (above), point the window to the website that corresponds to the image.
- Optional – If you already have JavaScript experience and the basic stuff is boring to you, try this for extra challenge: Add a small image to your page that will be positioned using CSS. Use a timer to make the image move across the screen and back (get the window size from the window object and use it to determine when to reverse directions). If you want to add any extra features such as using a mouseover on the image to make it bounce away from the mouse pointer you are free to experiment. Have fun with it.

### register.html
- Add an onfocus listener to each of the text fields in your form, that will display a paragraph with a description of the data the field requires (such as special data format instructions, etc.). Create a paragraph for each field and hide them when the page loads. Use CSS to set their size and position so they are in a stack. Change CSS visibility settings to make the appropriate paragraph visible and the rest hidden whenever a field gets focus.
- When the visitor submits the web form, validate the form to ensure that all fields have been entered. If your form does not have a postal code field, add one, and use a regular expression to ensure that it is properly formatted. The following regular expression will be sufficient: `/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/`


