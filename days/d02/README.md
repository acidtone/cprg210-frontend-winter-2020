# CPRG 210: Day 2
## Overview
- CSS colour
- Anatomy of a web page
- Web typography
- Flexbox patterns
  - navigation
  - cards
  - galleries

## CSS Colour
Resources:
- Video: [Reading Colour Hexcodes](https://www.youtube.com/watch?v=eqZqx6lRPe0)
- Tool: [Color Inspo](https://colorsinspo.com/) helps you pick nice colours
- [Colour Contrast Checker](https://contrast-ratio.com/)

Overview of positive and negative colour models.
- Poisitve: RBG
- Negative: CMYK

Overview of the four colour modes of CSS
- colour names
- hexcode
- RBG
- HSL

## Anatomy of a webpage
- doctype
- head
- body
- styles
- scripts

### Activity: Creating a web page from Codepen
Create a single webpage from the HTML, CSS and JS listed in a Codepen of your choice. All styles and script should be embedded in the index.html page itself.

## Web Typography
### Generic font families
- Codepen: [Generic Font Families](https://codepen.io/acidtone/pen/QWwVxmv)

Generic font families are a fallback mechanism, a means of preserving some of the style sheet author's intent when none of the specified fonts are available. Generic family names are keywords and must not be quoted. A generic font family should be the last item in the list of font family names. The following keywords are defined:
- serif
- sans-serif
- monospace
- cursive
- fantasy
- system-ui
- emoji
- math
- fangsong

### Balancing the typography triad
- font size
  - for screen design, a good range is 14-25 pixels
  - em, rem and ch
    - Codepen: [Differences bt em, rem and ch](https://codepen.io/acidtone/pen/WNbgyQw)
- line spacing
  - usually 120-150% of your font size
  - default depends on browser and font family but is often 1.2 (120%)
  - in general, the longer your line length, the more line height you need
- line length 
  - long line lengths are a common problem in web
  - try to stay within 30-85 characters long (this also depends on your font-size and line height)
  - use the `ch` unit to control character length

### Font services
Search: [Google Fonts vs Adobe Fonts](https://www.google.com/search?q=fonts+google+vs+adobe&oq=fonts+google+vs+adobe)

Reference: [Excellent two font combinations](https://www.reliablepsd.com/ultimate-google-font-pairings/)

## Nav Lists
- nav tag
- nested lists
- `display: none`
- making text links buttony

## Flexbox
Refer to CSS Tricks' [Complete Guide to Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/) for a great summary of Flexbox and how to use it.

### Key takeaways
- containers vs items
- axis and cross-axis reverses justify and align
- Use the `flex` shorthand property over `flex-grow`, `flex-shrink` and `flex-basis` (for now)

### Responsive patterns
CSS Grid is beginning to take over global layout duties but flexbox is very handy for the following patterns (there others):
- Horizontal navigation
  - `display: flex;`
  - `flex` property
  - `justify-content`
- Cards
  - `flex-direction`
- Galleries
  - `flex-wrap`

### Resources
- Example: [Horizontal Flexbox Navigation](https://codepen.io/funwithcodeyyc/pen/BaBXjVL)
- Learning Game: [Flexbox Froggy](https://flexboxfroggy.com/)
- Course: [What the Flexbox ?!](https://flexbox.io/)
  - Take this course at your own pace. It's not required but is a great intro to Flexbox.
  - email address required but the course is free
- Article: [The `flex` property](https://css-tricks.com/almanac/properties/f/flex/)
- Article: [Flexbox's Best Kept Secret](https://hackernoon.com/flexbox-s-best-kept-secret-bd3d892826b6)
- Search: [Top Flexbox articles on CSS Tricks](https://css-tricks.com/?s=flex&orderby=relevance&post_type=post%2Cpage%2Cguide)

# Appendix
## Background and Resources
- CSS
  - Video: [Why is CSS So Weird?](https://www.youtube.com/watch?v=aHUtMbJw8iA)
- CSS Images
  - Article: [background-image](https://css-tricks.com/almanac/properties/b/background-image/)

## Fonts
### Resources
- Reference: [MDN font-family documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/font-family)
- Article: [On Web Typography](https://alistapart.com/article/on-web-typography/)
- Article: [Font Fallbacks](https://css-tricks.com/css-basics-fallback-font-stacks-robust-web-typography/)
- Article: [Typography for Developers](https://css-tricks.com/typography-for-developers/)
- Article: [Icon Fonts are Awesome](https://css-tricks.com/examples/IconFont/)
- Reference: [List of all official HTML entities](https://html.spec.whatwg.org/multipage/)
- Advanced: [Fluid Typography](https://css-tricks.com/snippets/css/fluid-typography/)

### Type Faces
There are four broad categories of type faces:
- serifs
  - old style
  - transitional
  - neoclassical & didone
  - slab
  - clarendon
  - glyphic
- sans serifs
  - grotesque
  - square
  - humanistic
  - geometric
- scripts
  - formal
  - casual
  - caligraphic
  - black letter
  - lombardic
- decorative
  - grundge
  - psychedelic
  - graffiti
- monospaced

Limit your body text to serif and sans serif type faces. Reserve scripts and decorative fonts for headings and hero type.

### Web safe fonts
Source: [Font stacks for Window & Mac browsers](https://coderwall.com/p/57imrw/common-fonts-for-windows-mac)

- Arial, Helvetica, Sans-Serif
- Arial Black, Gadget, Sans-Serif
- Comic Sans MS, Textile, Cursive
- Courier New, Courier, Monospace
- Georgia, Times New Roman, Times, Serif
- Impact, Charcoal, Sans-Serif
- Lucida Console, Monaco, Monospace
- Lucida Sans Unicode, Lucida Grande, Sans-Serif
- Palatino Linotype, Book Antiqua, Palatino, Serif
- Tahoma, Geneva, Sans-Serif
- Times New Roman, Times, Serif
- Trebuchet MS, Helvetica, Sans-Serif
- Verdana, Geneva, Sans-Serif
- MS Sans Serif, Geneva, Sans-Serif
- MS Serif, New York, Serif

See [Web-safe font stacks](https://codepen.io/funwithcodeyyc/pen/eYNmYQP) for a Codepen implementation.

## @import vs @font-face
Source: [Difference between @font-face and @import url?](https://stackoverflow.com/questions/56141957/difference-between-font-face-and-import-url)

### Icon fonts
Search: [icon fonts](https://www.google.com/search?q=icon+fonts)

## HTML Entities
- Reference: [List of all official HTML entities](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)