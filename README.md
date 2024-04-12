# Namaste Trishal

# Parcer

Dev Build
Local Server
HMR ( File Watching algorithm written in C++ ) // as soon we update, build occurs instantly
Caching , hence fast builds
Image Optimization
Minification files
Bundling
Compress
Consistent Hashing
Code spliting
Differential Bundling - To support different and older BROWSERS
Diagnostics
Better error handling (giving beatiful colored error suggesstions)
HTTPS - can host our app on HTTPS
Tree shaking - remove unused code (if we are not using some functions )
different dev and prod bundles
Transpiling
have web workers, server lorkers
lazy implementation
.parcel-cache file is used to cache, which makes app way faster

# Food ordering app

# 2 Types of routing in webapps

Client side
Server side

# Component Mounting Lifecycle

    Render Phase
        constructor (props and state creation phase)
        render - reconciliation (finding the difference in components)

    Commit Phase
        React update DOM (DOM Manipulation)
        Component DID Mount

# Optimization Principle

A component, class, function must have single responsibility feature

# DO LOGICAL Separation of bundling in app

dynamic bundling, chunking, Lazy loading, code splitting, on demand loading, dynamic import

# ways to add css in project

css
SCSS
Styled Component
CSS Libraries - Material UI, Bootstrap, ANT Design, Chakra UI
Tailwind CSS

# controlled and uncontrolled components

When a component has its own state then it is a uncontrolled Component
When a component is controlled based on their parent state are called as controlled state

# State Management Library

Redux - It creates a central store, a state management library
Redux Thunk middleware
Remember : For small application context api is enough
Redux make testing easy

# Redux TOOLKIT

Install @redyc/toolkit react-redux
Build our store
Connect our store to our app
create cart Slice
Dispatch Action
Selector

# Developr Testing

Manual testing
Writing test cases
Unit testing - Only testing the component where changed
Integrated testing - Test a complete flow of part of code changed
End to ENd testing - As soon as user landing on app till the user leaves the app

    For E2E testing we need tools like cypress, seleniuum, puppyteer

# Setting up testing in React app

Install react testing library
Install jest
Install Babel dependencies (To use jest with babel)
Configure bebel -> babel.config.js
Config parcel file (.parcelrc) to disable parcel babel default transpilation, so to use babel.config.js
Jest Configuration -> npx jest --init
Install jest-environment-jsdom
Install @babel/preset-react - Jest to work with JSX syntax
Include @babel/preset-react in babel.config.js
Install @testing-library/jest-dom  -> It give us list of all assert function

JsDOM - JEST doesn't run on browser but to run test cases we need a runtime env where test cases run. It is like a browser where testing code run.



