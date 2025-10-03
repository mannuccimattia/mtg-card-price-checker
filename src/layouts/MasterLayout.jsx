import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

const MasterLayout = () => {
    return (
        <div id='app'>
            <Header />
            <main className='text-light'>
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}

export default MasterLayout
