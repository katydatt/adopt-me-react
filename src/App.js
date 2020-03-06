import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Details from './views/Details'
import { Router, Link } from '@reach/router'
import SearchParams from './views/SearchParams'
import ThemeContext from './components/ThemeContext'

const App = () => {
    const themeHook = useState('darkblue')
    return (
        <React.StrictMode>
            <ThemeContext.Provider value={themeHook}>
                <div>
                    <header>
                        <Link to="/">Adopt Me!</Link>
                    </header>
                    <Router>
                        <SearchParams path="/" />
                        <Details path="/details/:id" />
                    </Router>
                </div>
            </ThemeContext.Provider>
        </React.StrictMode>
    )
}

// ReactDOM.render(React.createElement(App), document.getElementById("root"));
ReactDOM.render(<App />, document.getElementById('root'))
