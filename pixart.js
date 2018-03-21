/* Query Selections */
document.querySelector('.controls')
document.querySelector('#color-field')
document.querySelector('.brush')
document.querySelector('#set-color')
document.querySelector('.square')
/*Event Listener Selections*/
// function.addEventListener('', '');

// ### Commit 1
// * When I click the "Set Color" button, it should change the color of
// the "brush" box to the color I specify in the input field.
// * You can use `document.querySelector` (or another document method)
// to select the element, then add an event listener.
// **HINT:** You will notice that the page refreshes whenever you click
// the button. You need to prevent this from happening using a method
// you have not used before. Google "javascript event prevent default".
// You can also reference (link)
////////////////////////////////////////////////////////////////////////
// QS Variable Dec's
let colorTextIn = document.querySelector('#color-field');
let colorSet = document.querySelector('#set-color');
let brushChange = document.querySelector('.brush');
// Get Color from Input
colorSet.addEventListener("click", function(){
  // Set Color to Brush
  brushChange.style.backgroundColor = colorTextIn.value;
});
// Prevent Refresh
colorSet.addEventListener("click", function (e) {
  e.preventDefault()});
////////////////////////////////////////////////////////////////////////
// ### Commit 2
// * The same thing should happen when I press the enter key from inside
// the input field
////////////////////////////////////////////////////////////////////////


////////////////////////////////////////////////////////////////////////
// ### Commit 3
// * Create 20 divs of the "square" class and append them to the body
//   * **Hint**: use `.appendChild()`

// ### Commit 4
// * Add functionality so that when I click on each "square", it changes
//  the color of that individual square to "green"
//   * **Hint**: either add the event listener while creating the
// squares, or listen for events on the `body` element

// ### Commit 5
// * Modify your code so that when I click on each "square", it changes
// to the color I set using my input instead of "green" every time.

// ### Commit 6
// * Modify the CSS so that the "square" class has a height and width of
// 10px and a margin of 0.
// * Modify your code so that you are creating 8000 divs instead of 20.
// * Change the event that changes your box colors from 'click' to
// 'mouseover'
// * Paint a picture!

// ### Bonus
// * Add a color swatch. You should have 3 boxes with the most recent 3
// colors used. When you click on each of those boxes, it should set the
// current brush color back to that color.
