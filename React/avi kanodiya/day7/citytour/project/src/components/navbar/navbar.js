import React from 'react'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function navbar() {
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className='navbar-brand' href="">
                    <img src="https://png.pngtree.com/png-clipart/20200709/original/pngtree-travel-logo-design-free-logo-design-template-png-image_2944350.jpg" width="100" height='60' alt="" class="" alt="" />
                </a>
                <div className='collapse navbar-collapse'>
                    <ul className='navbar-nav'>
                        <li className='nav-item'>
                            <a className='nav-link' href="">Home</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="">About</a>
                        </li>
                        <li className='nav-item'>
                            <a className='nav-link' href="">Tours</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default navbar
