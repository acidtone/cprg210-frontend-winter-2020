# Individual HTML/CSS/Javascript Assignment
## Due
This assignment is due Monday, February 24th @ 8pm.

## Value
This assignment will be marked out of 30 points and will be worth 50% of the frontend portion of this course.

## Requirements
- Create 3 pages named “index.html”, “register.html”, and “contact.html”.

### index.html
- HTML/CSS
  - Create a [hero section](https://envato.com/blog/exploring-hero-image-trend-web-design/) at the top of the page that:
    - is semantically marked up in a `header` tag
    - is the full width and height of the viewport
    - displays an `h1` heading with the text "Welcome to Travel Experts" inside it.
    - contains a `background-image` and at least one `background-color` declaration
  - Using an `img` tag, display a logo at the top of the page. You may also use an icon font in place of an image. 
  - Display a gallery of travel pictures below the hero section.
  - In a `footer` at the bottom of the page, display copyright information (hint: search for html entities and/or icon fonts to find a copyright symbol).
- Javascript
  - Put a script tag in the head section of your main page and create two arrays. The first will have some image objects (limit this to a reasonable number, perhaps 4 or 5 images), and the second array will have strings with descriptions of each of the images.  When the body of the page loads, loop through the arrays and get each image and the corresponding description and display them in a table row, one row per image. 
  - For extra challenge: Instead of using two table cells per row, just create one cell with the description. Add a `<div>` tag, and add a mouseover event handler to each table cell. When the mouse pointer moves over the cell pass it’s index number to a function. In the function, place an image tag into the `<div>` tag’s innerHTML property. Set the `<img>` tag’s source to the source of the image array’s image object for that index.
  - If anything is wrong with the form data, stop the submission, otherwise send it to `#submitted`. 
  - Add another array to your page that will have a URL of a website for each image in the images array. Try to find websites that fit well with the images that you are using.
  - Modify your image and description table. For each image, include a click handler that will call a function to open a new window and start a timer that will close the window after a few seconds.
  - Whenever you open a new window in step 2 (above), point the window to the website that corresponds to the image.
  - Optional – If you already have JavaScript experience and the basic stuff is boring to you, try this for extra challenge: Add a small image to your page that will be positioned using CSS. Use a timer to make the image move across the screen and back (get the window size from the window object and use it to determine when to reverse directions). If you want to add any extra features such as using a mouseover on the image to make it bounce away from the mouse pointer you are free to experiment. Have fun with it.

### contact.html
- HTML/CSS
  - Use lists and paragraph tags to display the contact information for the agency and the individual agents.
  - Bonus points: Set up a form that has fields for emailing the site owner. Since you don’t have a server-side script to process the data, try using a free [static form service](https://css-tricks.com/a-comparison-of-static-form-providers/).

### register.html
- HTML/CSS
  - Using a media query, try changing your form from one-column (mobile; label sits above the input field) to two-column (tablet+; labels and inputs sit side-by-side). Use `max-width` to keep your form usable on large screens.
  - Ensure that the input tags in your form all have enough contrast to be readable by all users.
- Javascript
  - Set up a web form for customers to enter their name, address, city, province, postal code, and anything else that you want to include. Submit the form to `#form-submit`.
  - Modify your web form to ask for confirmation before submitting or resetting. Put a click event handler on the submit and reset buttons of the form. When these buttons are clicked, confirm dialogs should pop open asking them if they really want to do this. If the user clicks “ok”, the submit or reset continue, otherwise they should be cancelled.

  - Add a focus listener to each of the text fields in your form, that will display a paragraph with a description of the data the field requires (such as special data format instructions, etc.). Create a paragraph for each field and hide them when the page loads. Use CSS to set their size and position so they are in a stack. Change CSS visibility settings to make the appropriate paragraph visible and the rest hidden whenever a field gets focus.
  - When the visitor submits the web form, validate the form to ensure that all fields have been entered. If your form does not have a postal code field, add one, and use a regular expression to ensure that it is properly formatted. The following regular expression will be sufficient: `/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/`

### Global requirements
- Each page should have the same global navigation using `nav`, `ul`, `li` and `a` tags to link each page to each other. Include your logo somewhere in the navigation (note: it doesn't necessarily need to be in your nav list).  
- Define style settings that will set the font family, size, and color of the text in your tags. You are free to use a font service for this.
- Download and `link` to an external stylesheet page that will reset your styles to defaults (hint: normalize.css is a popular option)
- Create an external stylesheet file and `link` it into your pages to provide custom style settings.

## Marking Rubric
Hand in your source code files by saving them in a .zip file and dropping it into the drop folder on Brightspace.

Your mark is based on submitted work. Code will be examined using the following criteria.

PLEASE NOTE: Assignments are due on the date specified by the instructor. One mark will be subtracted if the files are submitted within one week of the due date. Files submitted after 1 week of the due date will have one mark subtracted per additional day beyond one week that the file is late.

### Code Readbility
- 3 points: Code is well-written, with consistent indentation, adequate white-space, and avoids long lines.
- 2 points: Code is readable but indentation, white-space, line length could all be improved.
- 1 point: Code is sloppy and hard to understand.

### Validation
- 3 points: HTML and CSS validate with no errors.
- 2 points: HTML and CSS some errors but an attempt has been made to fix them.
- 1 point: HTML and CSS are a long way from validating.

### Logic Errors
- 3 points: Code is free of logic errors.
- 2 points: Code has some bugs that could not be found, but were documented and an attempt was made to fix them.
- 1 point: Code has major bugs.

### Meeting Requirements
- 3 points: Does everything the assignment requested.
- 2 points: Does most of what the assignment requested.
- 1 point: Only partially completed.

### Naming Standards
- 3 points: Follows proper naming convention.
- 2 points: Partially follows naming convention.
- 1 point: Naming convention not followed.

### Design
- 3 points: Code is well-planned, well-organized, modular, easy to maintain or enhance.
- 2 points: Code could be organized better, could be difficult to maintain or enhance.
- 1 point: Code is poorly organized, looks like it was written without much planning.

### Internal Documentation
- 3 points: Code is thoroughly documented
- 2 points: Documentation is partially done
- 1 point: Documentation is very sparse

### File Submission
- 3 points: Files are submitted to instructor by due date.
- 2 points: Files are submitted within 1 week of due date.
- 1 point: Files are not submitted within 1 week of due date. Beyond one week of lateness, one mark will be subtracted per additional day that the file is late.

### Introduction of Submission
- 3 points: All files contain heading documentation identifying the author, date, course module and assignment.
- 2 points: Some of the required information is missing.
- 1 point: No identifying documentation.

### Filename
- 3 points: Files are zipped into one file. Zip file name clearly indicates the course code, module/assignment name and student name.
- 2 points: File name is not entirely clear on the required information.
- 1 point: File name has none of the required information.