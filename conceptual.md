### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
  - React routers are able to build single-page, client-side applications, that are capable of seamlessly updating anytime updates are made.


- What is a single page application?
  - A single page application that is an application that is able to automatically update and render edits without having to manually refresh the page.


- What are some differences between client side and server side routing?
  - Client Side:
    - Executed on the user's device.
    - Is executed after the webpage is rendered.
    - Potentially less secure
  - Server Side:
    - Executed on the web server.
    - Is executed before the webpage is rendered.
    - More secure


- What are two ways of handling redirects with React Router? When would you use each?
  - You can either use the ```<Redirect>``` component to immediately redirect the user to a given page or you can use the ```useHistory``` hook to redirect users to specific routes. The ```useHistory``` hook can also be used inside of things like a form submittal.


- What are two different ways to handle page-not-found user experiences using React Router? 
  - You can use either a route component with "*" as its path to render custom 404 components, or you can opt to use a switch component instead, wrapping multiple routes and rendering a default 404 page outside any valid route, ensuring it will only display on invalid routes.


- How do you grab URL parameters from within a component using React Router?
  - Simply use the ```useParams``` hook, and it will return an object containing the key-value pairs of the URL's parameter(s).


- What is context in React? When would you use it?
  - In React, context is a method used to create and pass around global variables across multiple different components.


- Describe some differences between class-based components and function components in React.
  - Class-Based Components: 
    - Extends from React
    - Longer syntax
  - Function Components:
    - A JavaScript pure function
    - Shorter syntax
    - Use hooks to manage states/side-effects


- What are some of the problems that hooks were designed to solve?
  - To effectively manage huge components.
  - To simplify confusing classes.
  - Created from desire to reuse code/share stateful logic between components
