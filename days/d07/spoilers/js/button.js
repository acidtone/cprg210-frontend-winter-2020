// Step 1: declare a variable named 'counter' and assign it to the <span> element that states the number of clicks. This will be zero the first time the page loads.

function handleClick() {
  // This function will run any time your button is clicked.
  console.log('clicked');
  const counter = document.querySelector('span');

  // Step 2: Find the current number of times clicked (hint: try innerText) and assign it to a variable called 'currentCount'.
  let currentCount = counter.innerText;
  // console.log(currentCount);

  // Step 3: Increment currentCount by one
  currentCount++;

  // Step 4: Udpate the counter using the method we learned yesterday (*cough*innerText*cough*).
  counter.innerText = currentCount;

  // Step 5: Using the classList API, add the class of 'active' to the to change the `background-color` of the <body> element.
  const body = document.querySelector('body');
  // body.classList.add('active');

  // Step 6: Using one if/else statement, toggle the body background: add the 'active' class when it's missing and remove it when it's present.
  // console.log(body.classList.contains('active'));
  // console.log(body.classList.length);

  // if (body.classList.contains('active')) {
  //   body.classList.remove('active');
  // } else {
  //   body.classList.add('active');
  // }
  body.classList.toggle('active');

  // Bonus step: Add a Lorem Picsum <img> that changes whenever the button is clicked. Use the current counter value as an image id. Hint: you can dynamically set an element's attributes with `element.setAttribute()`
  const img = document.querySelector('img');
  const url = 'https://picsum.photos/id/' + currentCount + '/200/200';

  img.setAttribute('src',url);
  img.setAttribute('alt','Lorem Picsum Image #' + currentCount);
} 