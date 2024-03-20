- need to move over this bump is react and understanding the great start. we incrementally build up and is a good starting point.
- in react there are components:
	- defining our own html tags.
	- effectively created our new HTML tag which returns the html stored .
	- Components are used to abstract a lot of HTML together.
- can send data to components and also used it inside our components.
- vw -> complete view width 
- vh -> complete view height 

### flexbox:
	- common thing to keep things in center.
	- basically to position things to various positions of the screen.
	- also requires some grasping.
	- divs take by default whole width, span can be used.
	- real world to restrict the width of things using flexbox.
	- know elemnts shouldnt take full width , use flexbox.
	- the parent div , give display: flex , to introduce flexbox.
	- justify-center
		- if start ; then everyhting appears at the start.
		- if end ; then eveyrhting appears at the end.
		- space-between ; 3 elemetns equi spaced.
 - if we have added flex to a parent doesnt mean its gradnchild also will have that, check the most immediate parent tag property. only works in 1 level.

### Routing:
- routing to a path when redirecting a component.
- if path is / then render component1, else render component2 etc.
- conditional rendering.
- these routes are ususally defined in one file.
- to add a new page is to add a new route.
- the router can work inside the scope of other elements in it as well.
- the code will change based on the route it is based on it.
- generally we can keep the routing route in the appbar and is present in each page for easy navigation.
- can directly route using window.location 
- however this can cause a full reload.
- single page application, keeps the structure intact and doesn't need full reload of the data, shouldnt need to do it.(window.location does that)
- 