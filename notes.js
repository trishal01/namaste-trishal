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












*/