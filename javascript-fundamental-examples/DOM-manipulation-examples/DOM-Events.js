    //Events
/* Below about examples of common events 
-The page finishes loading
-The user clicks a button
-the user hovers over a dropdown
-the user submits a form
the user presses a key on their keyboard
*/
    //Event Handlers
/* Three ways to assign events to element 
-Inline event handlers
-Event handler properties
-Event listeners
*/

/* Inline event handler example 

    <button class="my-button" onclick="changeText()">My Button</button>
*/

// Function changeText will modify text content at p.button-demo element
const text = document.querySelector('.button-demo');
const changeText = () => {
    text.textContent = "my name Thanh Tung";
}
// add event handler as a property 
text.onclick = changeText;
// Event handler property is slightly more maintainable than the inline, but have some hurdles

    //Event Listeners
/* addEventListener() takes two mandatory parameters, the event it is to be listening for,
and the listener callback function */
text.addEventListener('click', changeText) //every event listener drops the 'on' from the word
text.removeEventListener('click', changeText) //to remove one or all event from an element

    //Common Events
/* Mouse Events
- 'click': when mouse is pressed and released on an element
- 'dbclick': when clicked twice
- 'mouseenter': when pointer enters an element
- 'mouseleave': when pointer leaves
- 'mousemove': every time pointer moves inside an element
*/
/* Form Events
- 'submit': Fires when a form is submitted
- 'focus': Fires when an element receives focus
- 'blur': when an element loses focus
*/
/* keyboard Events
- 'keydown': Fires once when a key is pressed
- 'keyup': when a key is released
- 'keypress': Fires continuously while a key is pressed
*/

    //Events Objects
/* The Event object is passed through a listener function as a parameter
(usually weitten as event or e) */
document.addEventListener('keydown', e => {
    const element = document.querySelector('p');

    let a = 'keyA';
    let b = 'keyB';
    let c = 'keyC';

    switch (e.code) {
        case a:
            element.textContent = 'left';
            break;
        case b: 
            element.textContent = 'right';
            break;
        case c: 
            element.textContent = 'up';
            break;
    }
});
