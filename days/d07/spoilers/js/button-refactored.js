function init() {
  // Initialize our element variables
  const body = document.querySelector('body');
  const button = document.querySelector('button');

  button.addEventListener('click',function(evt){
    // Find the current number of times clicked (hint: try innerText) and assign it to a variable called 'currentCount'.
    const counter = document.querySelector('span');

    let currentCount = counter.innerText;

    // Increment and udpate the counter using the method we learned yesterday (*cough*innerText*cough*).
    currentCount++;
    counter.innerText = currentCount;
    
    // Toggle the body background: add the 'active' class when it's missing and remove it when it's present.
    body.classList.toggle('active');

    // Bonus refactor step: Try preloading the next image in the sequence to remove the delay from downloading.
    img = document.querySelector('img');
    url = 'https://picsum.photos/id/' + currentCount + '/200/200';

    img.setAttribute('src',url);
    img.setAttribute('alt','Lorem Picsum Image #' + currentCount);

    });
}

// Initialize our app
init();