import { Outlet } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useContext } from 'react'
import GlobalContext from '../contexts/globalContext'
import Loader from '../components/Loader'

const MasterLayout = () => {

    const { isLoading } = useContext(GlobalContext);

    return (
        <div id='app'>
            <Header />
            <main className='text-light'>
                <Outlet />
            </main>
            <Footer />
            {isLoading && <Loader />}
        </div>
    )
}

export default MasterLayout
