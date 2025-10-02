import React from 'react'
import { Outlet } from 'react-router-dom'

const MasterLayout = () => {
    return (
        <div id='app'>
            <header>header</header>
            <main>
                <Outlet />
            </main>
            <footer>footer</footer>
        </div>
    )
}

export default MasterLayout
