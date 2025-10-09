import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate();

    return (
        <nav className="navbar" data-bs-theme="dark">
            <div className="container">
                <figure id="header-logo">
                    <a onClick={() => navigate("/")}>
                        <img className='img-fluid' src="/imgs/header-logo.png" alt="website logo" />
                    </a>
                </figure>
            </div>
        </nav>
    )
}

export default Header
