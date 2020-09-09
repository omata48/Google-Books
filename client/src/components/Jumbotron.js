import React, {useContext} from 'react';
import ThemeContext from './theme-context'

function Jumbotron() {
    const theme = useContext(ThemeContext)

    return <div style={theme} className='jumbotron mt-2 text-center'>
        <h1>(React) Google Books Search</h1>
        <h2>Search for and Save Books of Interest</h2>
    </div>
}

export default Jumbotron;