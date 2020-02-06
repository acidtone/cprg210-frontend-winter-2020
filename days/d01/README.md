# Day 1
## Background Resources
- Video: [HTML Crash Course For Absolute Beginners](https://www.youtube.com/watch?v=UB1O30fR-EE)
- Video: [CSS Crash Course For Absolute Beginners](https://www.youtube.com/watch?v=yfoY53QXEnI)

## Activity: Environment Setup
1. Install the latest versions of:
- Firefox (preferrably Developer or Nightly versions)
- Text Editor:
  - VS Code
    - install Live Server extension
  - ask your instructor if you'd like to use another editor
- Create GitHub account

## The Big Picture
- History of the Internet
- History of the Web
- How it all fits together
  - Backend
  - Network
  - Frontend

## Application overlap/analogues
- Google Docs
  - typography
  - headings, paragraphs, lists
  - margins, padding
  - headers, footers
- Photoshop
  - jpeg, gif, png
  - alpha channels
  - masking
  - borders
  - backgrounds
- Illustrator
  - svg
  - gradients
  - borders
  - backgrounds
  - clip paths
- InDesign
  - layout (css grid, flexbox)
  - typography

## Self-learning tools of the trade
In order of preference:
- Search
  - See Appendix for search tips
  - convergent vs divergent searches
  - Searching error strings
- Documentation
  - Mozilla Developer Network (MDN)
    - [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
    - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    - [Javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- The community
  - [CSS Tricks](https://css-tricks.com/)
  - [Stack Overflow](https://stackoverflow.com/)
  - Popular Youtubers (these are just a few)
    - [Brad Traversy](https://www.youtube.com/channel/UC29ju8bIPH5as8OGnQzwJyA)
    - [Kevin Powell](https://www.youtube.com/channel/UCJZv4d5rbIKd4QHMPkcABCw)
    - [Wes Bos](https://www.youtube.com/user/wesbos)
    - [Layout Land](https://www.youtube.com/channel/UC7TizprGknbDalbHplROtag)
    - [Mozilla Developer](https://www.youtube.com/MozillaDeveloper)
- neighbour/mentor/random stranger
  - Summary: be respectful of someone else's time. At the very least, search for a solution before asking someone for help.

## Accessibility
What are some types of disabilities that may affect how someone uses a website?
- sight: blind or low vision
- hearing: deaf or hard of hearing (caption on videos) 
- mobility: unable to use mouse, only uses keyboard, uses voice commands
- cognitive disabilities: 
    - brain injury/disease
    - dyslexia
    - memory
    - ADHD

### WGAC 2.0 Four Principles
1. **Perceivable**: Information and user interface components must be presentable to users in ways they can perceive.
2. **Operable**: User interface components and navigation must be operable.
3. **Understandable**: Information and the operation of user interface must be understandable.
4. **Robust**: Content must be robust enough that it can be interpreted reliably by a wide variety of user agents, including assistive technologies.

### Assistive Technologies (AT)
- Screen reader
- Screen magnification software
- Text reader
- Speech input software
- Alternative input devices
    - Head pointer
    - Motion tracking/eye tracking
    - Single switch entry device

## HTML 101
## Code Validation
- W3C: [HTML Validator](https://validator.w3.org/)
- W3C: [CSS Validator](https://jigsaw.w3.org/css-validator/)
- VS Code: [HTMLLint](https://marketplace.visualstudio.com/items?itemName=mkaufman.HTMLHint)
- minimum valid HTML page

## HTML Terminology
- Open tag
- Closing tag
- Attributes
  - name/value
  - quotes
- Elements
- Nesting

## Live Code Session: Codepen
Let's code a simple page using the [Lorem Picsum image service](https://picsum.photos/) ([spoilers](https://codepen.io/funwithcodeyyc/pen/MWgNapw)). Use an open-source sample of text of your choice (i.e. [Wikipedia](https://www.wikipedia.org/)).

## Flow layout: Most common elements
- Block content
  - Headings: `h1-6`
  - Paragraphs: `p`
  - Lists: `ul`, `ol`
- Inline content
  - Images
    - Video: [Improving Image Loading on Your Website](https://www.youtube.com/watch?v=4-d_SoCHeWE)
    - Set `width` and `height` attributes
    - Protecting aspect ratio: set `height: auto` when width is declared (or vice versa)
  - Links: `a`
    - urls
    - target
  - Common HTML style elements
    - Bolding text: `strong`
    - Italicizing text: `em`
    - Generic styling: `span`
- Semantic elements
  - Tags that are most important to Assistive Technologies (AT). Browsers add ARIA attributes so you don't have to:
    - `main`
    - `header`
    - `nav`
    - `footer`
    - `article`
    - `section`
      - The jury might still be out. See: [Why You Should Choose HTML5 `article` Over `section`](https://www.smashingmagazine.com/2020/01/html5-article-section/) ([TLDR;](https://www.smashingmagazine.com/2020/01/html5-article-section/#conclusion))

## CSS 101: The Box Model
- The classic box model properties:
  - display
    - Stack Overflow: [Block vs Inline vs Inline-Block](https://stackoverflow.com/questions/9189810/css-display-inline-vs-inline-block)
  - `width` / `height` (both have min/max versions)
  - `margin` / `padding`
    - shorthand properties
  - `color`
    - css colour names
    - Search: [contrast checkers](https://www.google.com/search?q=contrast+checker)
  - `background-color`
  - `border`
- Important length units
  - `px`
  - `em`/`rem`, `ch`
  - `vw`, `vh`, `vmin`, `vmax`

## Live Code: Minimal Responsiveness
Make this [Codepen of content](https://codepen.io/funwithcodeyyc/pen/MWgNapw) responsive by:
- setting a variable `width` using viewport units
- setting a `max-width` of 80 characters
- centring the content horizontally on the page using `margin`

## Activity: Anatomy of a webpage
Take the page of content above and recreate it in an `index.html` page.
1. Create a minimum html page from the *Validation* section above
2. Take the HTML code from the codepen and paste it into the `body` element
3. Take the CSS code and paste it into a `style` tag in the `head`

## Lab Time
Work on the [Day 1 Assignment](assignment/README.md).

# Appendix
## File and Filepath Naming conventions
- Files should be named consistently
- File names should be short but descriptive (<25 characters)
- Avoid special characters or spaces in a file name
- Underscores or hyphens instead of spaces
- Use lower case characters when possible
- Default file name for html: index.html
- Default file name for css: styles.css or main.css
- Default file name for js: app.js or index.js
- Default file name for documentation README (located in the root directory of a project; extension can vary but is usually .txt. or .md)

## Search Tips
- convergent searches
    1. Be brief: try to reduce your search query to four words or less.
        - Note: there are many times you will break this rule such as when you search an error (you're searching errors, right?) or when you need extra terms to make your query domain-specific (see next step!).
    2. Make your search domain-specific (aka industry specific). "heading" could mean a number of different things, depending on context. "html heading" focuses your search to the web design *domain*.
    3. Qualify your search with terms specific to your needs and skill level. These terms are often reused for many searches. Examples:
        - tutorial
        - cheatsheet
        - checklist
        - review
        - documentation
- divergent searches
    1. Access your engine's *suggestion* results by appending "vs" the end of your query. This is handy for finding alternatives to a specific tool/technique/philosophy.

    If suggestions exist (ie you're using Google) but the results disappear for a search, you probably used too many words; Google seems to only index simple phrases.

## Keys to basic accessibility
1. Appropriate image `alt` text usage
    - if you want a screen reader to read it, use text that describes what's in the image, not just an image title
    - if not (such as for an icon), leave alt attribute blank or use a CSS image instead
2. Replace `div` tags with semantic markup such as `nav`, `header`, `main`, `footer`, `article`,`section`, `aside`, etc
3. Use descriptive link text. Example: "click here" is NOT descriptive.
4. Create high colour contrast text.
5. Make text quickly scannable (i.e. for ADHD, memory disabilities). See the above UX section for details on how to do this.
6. Forms:
    - Use `fieldset` and `legend` tags to provide the purpose and directions for filling out a form
    - `label` your `input` fields
    - Be careful when altering `:focus` behaviour
    - Make sure keyboard entry is preserved when submitting a form via javascript
