// Get the element with id 'level'
const targetElement = document.getElementById('level');

if (targetElement) {
  let currentElement = targetElement;
  let level = 0;

  // Traverse up the DOM tree
  while (currentElement) {
    level++;
    currentElement = currentElement.parentElement;
  }

  // Display the DOM level
  alert(`The level of the element is: ${level}`);
} else {
  alert('Element with id "level" not found.');
}
