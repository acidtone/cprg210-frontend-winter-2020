# CPRG 210 Day 3
## Hero Sections with CSS Images
- Article: [Exploring the Hero Image Trend in Web Design](https://envato.com/blog/exploring-hero-image-trend-web-design/)

### Image File formats 
See [the complete list of browser supported formats](https://en.wikipedia.org/wiki/Comparison_of_web_browsers#Image_format_support).
- jpg/jpeg
- gif
- png
- svg (displayed as a raster image)

### Most relevant CSS properties
- `background-image`
- `url()`
- `background-position`
- `background-size`
- `background-repeat`
- `multiple backgrounds`
- gradients
  - `linear-gradient()`
  - `radial-gradient()`

### Live code: Hero image demo
Create a full screen header with background image. 

## Forms
- Video: [HTML Forms Crash Course Tutorial](https://www.youtube.com/watch?v=YwbIeMlxZAU)
- Codepen: [Forms, the wrong way](https://codepen.io/acidtone/pen/KKPrgNp)
- Article: [58 Form Design Best Practices & Form UX Examples](https://www.ventureharbour.com/form-design-best-practices/)

### Common Forms
- contact us
- signin
- register
- predictive search
- add to cart
  - checkout
    - mailing address
- newletter subscription
- polls
- postal code (for accessing location services)

### Anatomy of a form
- form container
  - `action`
  - `method`
    - get
      - variables listed after the ? in the url
    - post
      - variables sent in a separate header
      - used when encryption is needed or you want clean urls
      - OR you're using proper CRUD
  - `enctype="multipart/form-data"`
    - needed when you're uploading a file
- input types (see [complete list](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input))
- text based fields
  - text
  - password
  - phone
  - email
  - textarea
- selection fields
  - one of many
    - radio buttons
      - grouped by the same `name` attribute value 
    - menu select
  - one or more of many
    - checkbox
      - naming your checkboxes `name[]` creates a list on the server side
- special fields
  - file upload
    - `enctype="multipart/form-data"` required
  - range
  - color picker
- hidden fields

### Considerations with forms
- accessbility
  - `fieldset` and `legend` tags
  - `label`
  - layout best practices
- placeholders
- validation attributes
  - `required`
  - `disabled`
  - `pattern`
- pseudo-elements

### Form Layout
- html structure considerations
- Display options
  - legacy: inline vs block
  - modern: flexbox vs grid

## CSS Grid
- Reference: [Complete Guide to CSS Grid](https://css-tricks.com/snippets/css/complete-guide-grid/)
- Article: [Basic concepts of Grid layout](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout)
- Learning Game: [CSS Grid Garden](https://cssgridgarden.com/)
- Layout Land
  - [Basics of CSS Grid: The Big Picture](https://youtu.be/FEnRpy9Xfes)
  - [Flexbox vs. CSS Grid](https://youtu.be/hs3piaN4b5I)
- Grid by Example
  - [Defining a grid](https://gridbyexample.com/video/series-define-a-grid/)
  - [The fr unit](https://gridbyexample.com/video/series-the-fr-unit/)
  - [Repeat notation](https://gridbyexample.com/video/series-repeat/)

### Grid terminology
- container
- items
- cells
- lines
- gap
- tracks
- areas

### Track sizing
  - fr unit
  - minmax()
  - min-content and max-content
  - [grid track sizing comparison chart](https://codepen.io/huijing/pen/GPrQwN) by [Chen Hui Jing](https://codepen.io/huijing)

### Explicit vs implicit placement
  - `grid-column` and `grid-row`
  - 1 / -1
  - `span`

### Live code: Basic grid setup
Define a grid of `article`s and:
- create "tall" and "wide" items
- create a "feature" item that is both tall and wide
- explicitly place an item

### Activity: Laying out forms
Use css grid to layout one (or both) of the following starter forms:
- [Form with unwrapped field elements](starter/form-unwrapped.html)
- [Form with fields wrapped in labels](starter/form-label-wrapped.html)

