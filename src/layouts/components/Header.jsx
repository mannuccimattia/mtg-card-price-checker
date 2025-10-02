import React from 'react'

const Header = () => {
    return (
        <nav className="navbar bg-black" data-bs-theme="dark">
            <div className="container">
                <figure id="header-logo">
                    <a href="/">
                        <img className='img-fluid' src="imgs/header-logo.png" alt="website logo" />
                    </a>
                </figure>
            </div>
        </nav>
    )
}

export default Header
