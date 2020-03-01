const Pet = ({ name, animal, breed}) => {
    return React.createElement(
        'div',
        {},
        [
            React.createElement('h1', {}, name),
            React.createElement('h2', {}, animal),
            React.createElement('h2', {}, breed)
        ]
    )
}


const App = () => {
    return React.createElement(
        'div', // html tag element you want to create
        {}, // all the attributes u want to give to div { id: 'my-div'}
        [
            React.createElement('h1', {}, 'Adopt Me!'),
            React.createElement(Pet, { name: 'Frida', animal: 'Cat', breed: 'Bengala Cross'}),
            React.createElement(Pet, { name: 'Kiyl', animal: 'Dog', breed: 'Australian Sheppard'}),
            React.createElement(Pet, { name: 'Honda', animal: 'Cat', breed: 'Mixed'})
        ] // children you want to pass into your newly create element
    )
}

ReactDOM.render(
    React.createElement(App), 
    document.getElementById('root')
)