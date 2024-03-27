import React  from "react";
import  ReactDOM  from "react-dom/client";


const reactH1 = React.createElement('div', {id:'heading', abc: 'testing attr'}, React.createElement('h1', {id:'child', abc: 'testing attr'}, 'Hello India'));
const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(reactH1);

console.log(reactH1);