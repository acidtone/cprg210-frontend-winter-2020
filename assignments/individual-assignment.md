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
  - Display a gallery of travel pictures below the hero section (see Javascript section).
  - In a `footer` at the bottom of the page, display copyright information (hint: search for html entities and/or icon fonts to find a copyright symbol).
- Javascript
  - Put a script tag in the head section of your main page and create an array of objects (limit this to a reasonable number, perhaps 5 or 6 items). When the body of the page loads, loop through the array (i.e. using `array.forEach` or similar), get each object and add an image with description/link to a grid or flexbox gallery. Each object will define 
    - the image `src` URL
    - description of a popular travel destination. 
    - link URL that will open an external website (in a new window/tab) relating to the image
  - Extra points: If you already have JavaScript experience and the basic stuff is boring to you, try one of these for extra challenge:

### contact.html
- HTML/CSS
  - Use lists and paragraph tags to display the contact information for the agency and the individual agents.
  - Bonus points: Set up a form that has fields for emailing the site owner. Since you don’t have a server-side script to process the data, try using a free [static form service](https://css-tricks.com/a-comparison-of-static-form-providers/).

### register.html
- HTML/CSS
  - Using a media query, try changing your form from one-column (mobile; label sits above the input field) to two-column (tablet+; labels and inputs sit side-by-side). Use `max-width` to keep your form usable on large screens.
  - Ensure that the input tags in your form all have enough contrast to be readable by all users.
- Javascript
  - Set up a registration form for customers to enter their name, address, city, province, postal code, and anything else that you want to include. Submit the form to `#form-submit`.
  - Use HTML5 form validation to test for:
    - required fields
    - valid field values (i.e. well-formated email addresses, phone number, etc)
    - pattern matching on the postal code using the `pattern` attribute. The following regular expression will be sufficient: `/^[A-Z]\d[A-Z] ?\d[A-Z]\d$/`
  - If there is a problem with the form, add custom styles to make it obvious which fields need to be corrected.
  - Add a focus listener to each of the text fields in your form, that will highlight the current field using CSS. The goal is to make it obvious which text field is currently focused.
  - Be sure to include instructions/directions that instruct the user of special form requirements (asterisk for required fields, password strength guidelines, etc) 

### Global requirements
- Each page should have the same global navigation using `nav`, `ul`, `li` and `a` tags to link each page to each other. Include your logo somewhere in the navigation (note: it doesn't necessarily need to be in your nav list).
- Define style settings that will set the font family, size, and color of the text in your tags. You are free to use a font service for this.
- Create an external stylesheet file and `link` it into your pages to provide custom style settings.
 - Bonus points: Download and `link` to an external stylesheet page that will reset your styles to defaults (hint: normalize.css is a popular option)

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