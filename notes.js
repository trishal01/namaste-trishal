/*
File to keep notes

Browsers list package is used to tell what level of browsers to support

Transitive Dependency - 1 package dependa upon other packages and so on.

Parcel package is super powerful and actually making th app faster

npm start == npm run start (reserved) , npm build != npm run start

What is React element -> const heading = React.createElement('h1', 'attributes', value inside(children))
React element is object , not HTML element , but when we render in React element DOM then it become HTML element

Remember JSX is not writing HTML inside JS, JSX is HTML or XML like syntax

Remember JSX is not a part of React , JSX is different and React is different, we use JSX to write React elements
because JSX is developer friendly than core react
const JSXHeading = <h1 id='heading'> Hello JSX</h1>

JSX => React.createElement => React Element - JS Object => HTML Element(Render)

A function component is simple JS function which return JSX (React Element)

root.render(<App />)  // It converts everything to HTML and then browser is rendering it, render() from react-dom pckg

component composition - putting a component in another component

we can put any JS code in JSX {} brackets 

JSX sanitize the data before execute to avoaid malicious attacks , it prevents Cross site scripting attacks

When building an app from scratch
1 Make a plan on process on how you build, don't blindly start developing it

props are used to pass data and props are just arguments pass to function components
props is an object
when we need to pass data dynamically to a component pass it as a prop

CONFIG DRIVEN UI - our webapp is created by the respective data, for eg we may get 2, 5 corousels info in JSON and it will create as much 

loop over array and create restro componnt one by one

whwnever we loop, we nee dto provide a key prop

Component to maintain their itentity during update (render) therefore we use KEY prop 

if PROP not used then, react dont know wher to put a new restraunt card, otherwise react clear all and rerender

if PRop provided then react only render newer componet , not all componennts

react officially says dont use index as key prop

react is fast in DOm Manipulation - UI and Data Layer should work quick and simultaneously

React hooks are normal JS utility functions, wrote by Facebook team

USESTATE - super powerful local react state variables 

whenever a state variables update/changes, react re-rerenders the component

React uses reconciliation algorithm (react fibre)

Diff algo - find the differenece between 2 virtual DOM

Incremental Rendering - Ability to split the rendering work into different chunks over multiple Frames

React do fast DOM manipulations because of Virtual DOM

when we call the useState function , diff algo start implementing

monolith - huge big project has api , ui code, authentication, db coonectivity code, feature code

micorSERVICES - BE Service, UI service, UI , Authentication service 

SEPERATION OF CONCERS - SINGLE RESPONSIB;E ARCHITECTURE

SERVICE CONNECT WITH EACH OTHER     
we can use language , techstack based upon useCase

all services run on their own specific ports
1234 port - UI service  
2828 - BE   / api
1727 - SMS  / sms

all ports map to same URL

Two ways to get data

1. when app loada, we make API call to fetch data, and then render on the UI

2. when app loada, then render UI and then we make API call to fetch data, and then again re-render with the data

we use 2 nd approach in react for better user Exp

React has better and fast rendering mechanism

as soon as UI render, useeffect callback functioon called

brroeswes block from one origin to another, CORS policy

rendering based upon a condition is called as conditional rendering

How can we update const (loggedStatus) value -> const [loggedStatus, setLoggedStatus] = useState('Login');
because when loggedStatus change, component rerender which means now loggedStatus is a already new variable with new value

React Fibre is new React reconciliation method to effectively differ between the virtual DOm and updates the UI

If nodependency array, useEffect run on every render, when dependency added usefeect will render only when dependency change

call hooks on start on function component, alway keep at first level
never create hooks inside if else, for loop, function

------------
react router dom npm is used in react for routing

we have to config in App.js for react routing
configuration like what will happen on a specific route

useRouterError is used to better describe about Error



Children routes
we create clilderen routes of app layout to show header and footer with al other compomemts, USE OUTLET from router-dom for it

LINK TAG is used to navigate to new page without reloading complete page, ANCHOR Tag relaod complete page

DYNAMUC ROUTING - different route for each routing

GraphQL resolved data over fetching issue

we can't blindly use <shimmer at start of elemnt code

// CLASS COMPONENT
when a instace of class is initialted comstructor is called and state is initiated

loading a component , means mounting component, invokig comp

never update state variable directly even in class based component

state change --> render --> useEffect called

#LIFECYCLE CLASS BASED COMPONENT
componentDidMount
componentDidUpdate
componentWillUnmount

componentDidUpdate cycle runs after componentDidMount cyle also as soon as setState update

breakdown a component makes it readable, reusable, testable and modular

Suspense component's fallback attribute data is used to show the data for the time lazy load the files

----CSS
TAILWIND - CSS in JSX file only
Postcss is a tool for transforming CSS with JS

HOC is a component that takes a component and returns a component
Basically it takes a component enhance it features and return it back

LIFTING STATE UP - it is a feature in react to lift state from child component to parent component
whenever a state need to shared among siblings , we lift the state up to a common ancestor to make it a sole source of truth
used in accordion functionality

If we use context api then a number of context need to be create and handle, therefore devs prefer using Redux with toolkit






*/
