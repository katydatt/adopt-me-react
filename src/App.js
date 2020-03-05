// import Pet from './Pet'
import SearchParams from './components/SearchParams'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    // return React.createElement(
    //     "div", // html tag element you want to create
    //     {}, // all the attributes u want to give to div { id: 'my-div'}
    //     [
    //         React.createElement("h1", {}, "Adopt Me!"),
    //         React.createElement(Pet, {
    //             name: "Frida",
    //             animal: "Cat",
    //             breed: "Bengala Cross"
    //         }),
    //         React.createElement(Pet, {
    //             name: "Kiyl",
    //             animal: "Dog",
    //             breed: "Australian Sheppard"
    //         }),
    //         React.createElement(Pet, { name: "Honda", animal: "Cat", breed: "Mixed" })
    //     ] // children you want to pass into your newly create element
    // );
    return (
        <div>
            <h1>Adopt Me!</h1>
            <SearchParams />
            {/* <Pet name="Frida" animal="Cat" breed="Bengala Cross" /> 
            <Pet name="Kiyl" animal="Dog" breed="Australian Sheppard" />
            <Pet name="Honda" animal="Cat" breed="Mixed" /> */}
        </div>
    )
}

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById('root'))
