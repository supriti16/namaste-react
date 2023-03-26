const heading = React.createElement('h1', {
    id: "heading"
}, 'hello from react')


// const parent = React.createElement(
//     'div', 
//     { id: 'parent' }, 
//     React.createElement(
//         'div', 
//         { id: 'child' },
//          React.createElement('h1', {}, 'Hello from nested element')))

parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child' },[
        React.createElement('h1', {}, "I'm h1 tag"),
        React.createElement('h2', {}, "I'm h2 tag")
    ]),
    React.createElement('div', { id: 'child2' },[
        React.createElement('h1', {}, "I'm h1 tag"),
        React.createElement('h2', {}, "I'm h2 tag")
    ])
])

//react dom because it's for dom manipulation
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)