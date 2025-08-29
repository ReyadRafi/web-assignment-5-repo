**1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?**

If I think a HTML document as a house, so Each method is a different way of finding things inside it:

*   "getElementById()" is like using a key for one specific room which have a unique number. It's the fastest way to get a single, specific element.

*   "getElementsByClassName()" is like looking for everyone with a specific job or label to line up. Like : all the students, line up here. all the teacher, line up here.

*   "querySelector()" is like a programme which finds only the first element that matches your precise instructions. Like : the first student with a red hat, line up here. 

*   "querySelectorAll()" is almost same, but it finds every single element that matches the detailed description and makes a list of them all. Like : all student with a red hat, line up here. 


**2. How do you create and insert a new element into the DOM?**

To create and insert a new element into the DOM, first use the document.createElement() method to create the element, and then use a method like appendChild() or insertBefore() to insert it into a parent element on the page.


**3. What is Event Bubbling and how does it work?**

Event bubbling is a concept in the DOM where an event triggered on an element first executes on that element and then "bubbles up" through its parent elements, all the way to the top of the DOM tree. 
Imagine I have a button inside a div which is inside a body tag. When I click the myButton element. The click event is fired and handled on this element first. If I have an event listener on the button, it will be triggered.
The same click event then bubbles up to its parent element, the container div. If the div also has a click event listener, it will be triggered next. This process continues, with the event bubbling up to the body and finally to the html and document objects.


**4. What is Event Delegation in JavaScript? Why is it useful?**

Event delegation is a technique in JavaScript that extend event bubbling to handle events on multiple child elements by placing a single event listener on their common parent. Instead of adding an individual listener to each child, you listen for events at a higher level and use the event's properties to determine which child element triggered it.
Importance : Instead of creating dozens or hundreds of event listeners for individual elements, you only create one. This reduces memory usage and improves the overall responsiveness of your webpage, especially on pages with many interactive elements.


**5. What is the difference between preventDefault() and stopPropagation() methods?**

preventDefault() stops the browser's default action for a specific event. It prevents the browser from doing what it would normally do in response to an event.

stopPropagation() prevents an event from bubbling up the DOM tree. It stops the event from propagating to parent elements that also have listeners for the same event type.

Difference :
preventDefault() Stops a browser's default action and stopPropagation()	Stops event, bubbling up the DOM.
preventDefault() Is the default behavior of the element itself and stopPropagation()Is The flow of the event through parent elements.