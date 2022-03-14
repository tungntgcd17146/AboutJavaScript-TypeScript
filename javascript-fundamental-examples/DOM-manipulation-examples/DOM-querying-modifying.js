    //Selecting Elements
const demo = document.getElementById('demo-id'); // find Element by id
document.getElementsByTagName('p'); // find Element by tagname
document.getElementsByClassName('demo-class'); //find Element by class name

// the querySelector() method is more robust in that it can select by any type of selector
document.querySelector('.demo-class');
// Use querySelectorAll() to grab all element with demo-class
document.querySelectorAll('.demo-class');

    //Modifying Attributes
console.log(
    demo.hasAttribute('href') // return false because this element don't have href attribute
)
console.log(
    demo.getAttribute('href') // return the value of attribute, if not have return null
)
console.log(
    demo.setAttribute('href', 'abc.html') // adds value of a specified attribute
)
console.log(
    demo.removeAttribute('href', 'abc.html') // remove an attribute from element
)

    //Modifying Classes
//Have the className and classList properties to work with the class attribute
const name = document.querySelector('div'); // select the first div
name.className = 'warning'; // assign the warning class to the first div
/* Other way to modify classes via the classList property, similar Jquery:
    -addClass
    -removeClass
    -toggleClass
*/
const divIsActive = document.querySelector('.active'); // select div element have active class
divIsActive.classList.add('hidden'); // add the hidden class, this element will be display: none
divIsActive.classList.remove('hidden'); // remove the hidden class
divIsActive.classList.toggle('hidden'); //switch between hidden true and false
divIsActive.classList.replace('active', 'warning'); //replace class name active -> warning

    //Modifying Styles
// Option to edit the styles with setAttribute()
/* Remember This will remove all existing inline styles from the element */
const commonDiv = document.querySelector('.modifying-classes'); // select div element have class name modifying-classes 
commonDiv.setAttribute('style', 'text-align: center'); // apply style attribute to div.modifying-classes element
// The better to use the style attribute directly
commonDiv.style.backgroundColor = 'red'; // CSS properties are written in kebab-case