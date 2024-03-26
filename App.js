const reactH1 = React.createElement('div', {id:'heading', abc: 'testing attr'}, [React.createElement('h1', {id:'child', abc: 'testing attr'}, 'Hello India'), React.createElement('h2', {id:'child2', abc: 'testing 2'}, 'Hello India 2')]);
const root1 = ReactDOM.createRoot(document.getElementById('root'));
root1.render(reactH1);

console.log(reactH1);