import SearchModeSwitch from "../components/SearchModeSwitch";
import SearchForm from "../components/SearchForm";

const Homepage = () => {
    return (
        <div className="container">
            <div className="position-relative">
                <div className="home-content">
                    <h1 className='text-center mb-5'>FIND YOUR CARD</h1>
                    <SearchModeSwitch />
                    <SearchForm />
                </div>
            </div>
        </div>
    )
}

export default Homepage
