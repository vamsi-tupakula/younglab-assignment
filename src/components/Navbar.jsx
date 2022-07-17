import React from 'react'
import './css/Navbar.css'

function Navbar() {
    return (
        <div className='navbar'>
            <div className="logo">YourChallenge</div>
            <div className="links">
                <a href="/" className='product active-link'>Product</a>
                <a href="/" className='download'>Download</a>
                <a href="/" className='pricing'>Pricing</a>
            </div>
        </div>
    )
}

export default Navbar