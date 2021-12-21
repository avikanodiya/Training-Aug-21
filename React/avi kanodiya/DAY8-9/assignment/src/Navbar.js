import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav ms-auto'>
                        <li className='nav-item'>
                            <a className='nav-link' href="/">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/form">Form</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="/counter">Counter</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar

