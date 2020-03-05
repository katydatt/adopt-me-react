import React from 'react'
import ReactDOM from 'react-dom'
import Details from './views/Details'
import { Router, Link } from '@reach/router'
import SearchParams from './views/SearchParams'

const App = () => {
    return (
        <div>
            <header>
                <Link to="/">Adopt Me!</Link>
            </header>
            <Router>
                <SearchParams path="/" />
                <Details path="/details/:id" />
            </Router>
        </div>
    )
}

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById('root'))
