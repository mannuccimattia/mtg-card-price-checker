import { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../contexts/globalContext"

const SearchForm = () => {

    const [cardName, setCardName] = useState("");
    const [collectorNumber, setCollectorNumber] = useState("");
    const [setCode, setSetCode] = useState("");
    const [error, setError] = useState(null);

    const navigate = useNavigate();
    const { searchMode } = useContext(GlobalContext);

    const fetchCollectorNumber = () => {
        // Clear error before a new fetch
        setError(null);

        const url = `https://api.scryfall.com/cards/named?exact=${cardName.trim()}&set=${setCode.toLowerCase()}`;
        axios.get(url).then(res => {
            setCollectorNumber(res.data.collector_number);
        }).catch(err => {
            console.log('Full error object:', err);

            // Check if it's a server response error
            if (err.response) {

                // Scryfall API returns error details in err.response.data
                const errorData = err.response.data;
                console.log('Error details:', errorData);

                // Access the details property if it exists
                if (errorData.details) {
                    setError(errorData.details);
                } else if (errorData.message) {
                    setError(errorData.message);
                } else {
                    setError(`HTTP Error ${err.response.status}: ${err.response.statusText}`);
                }
            }

            // Network error or timeout
            else if (err.request) {
                setError("Network error: Unable to reach the Scryfall API");
            }

            // Other errors
            else {
                setError(err.message || "An unexpected error occurred");
            }
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // If error is caught, stop the submission
        if (error) {
            return
        }

        // If searching by name, fetch the collector number
        if (searchMode === "name") {
            fetchCollectorNumber();
        }

        // If searching by collector number, navigate to result page
        // Formatted to mimic Scryfall's /cards/:code/:number
        else {
            navigate(`/card/${setCode.toLowerCase()}/${collectorNumber.replace(/^0+/, '')}`);
        }
    }

    // Monitor collectorNumber to navigate to result page after it's been fetched
    useEffect(() => {
        if (setCode && collectorNumber) {
            navigate(`/card/${setCode.toLowerCase()}/${collectorNumber.replace(/^0+/, '')}`);
        }
    }, [collectorNumber]);

    return (
        <div className="position-relative">
            <div className="card card-body" data-bs-theme="dark">
                <form onSubmit={handleSubmit}>
                    {searchMode === "name" && (
                        <div className="d-flex mb-3 align-items-center">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="cardName"
                                    placeholder=" "
                                    required
                                    value={cardName}
                                    onChange={e => setCardName(e.target.value)}
                                />
                                <label htmlFor="cardName">Full name</label>
                            </div>
                            <i className="fa-regular fa-circle-question ms-2"></i>
                        </div>
                    )}

                    {searchMode === "number" && (
                        <div className="d-flex mb-4 align-items-center">
                            <div className="form-floating">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="collectorNumber"
                                    placeholder=" "
                                    required
                                    value={collectorNumber}
                                    onChange={e => setCollectorNumber(e.target.value)}
                                />
                                <label htmlFor="collectorNumber">Collector number</label>
                            </div>
                            <i className="fa-regular fa-circle-question ms-2"></i>
                        </div>
                    )}

                    <div className="d-flex mb-3 align-items-center">
                        <div className="form-floating">
                            <input
                                type="text"
                                className="form-control"
                                id="setCode"
                                placeholder=" "
                                required
                                value={setCode}
                                onChange={e => setSetCode(e.target.value)}
                            />
                            <label htmlFor="setCode">Set code</label>
                        </div>
                        <i className="fa-regular fa-circle-question ms-2"></i>
                    </div>

                    <div className="text-center">
                        <button type="submit" className='btn btn-outline-primary'>
                            <svg className='svg-logo me-1' xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 349 349" version="1.1">
                                <path d="M 147.020 25.500 L 122.448 50 88.224 50 C 55.333 50, 53.922 50.078, 52 52 C 50.078 53.922, 50 55.333, 50 88.242 L 50 122.485 25.800 146.700 C 3.204 169.310, 1.600 171.153, 1.600 174.500 C 1.600 177.847, 3.204 179.690, 25.800 202.300 L 50 226.515 50 260.758 C 50 293.667, 50.078 295.078, 52 297 C 53.922 298.922, 55.333 299, 88.224 299 L 122.448 299 147.020 323.500 C 169.487 345.901, 171.884 348, 175 348 C 178.116 348, 180.513 345.901, 202.980 323.500 L 227.552 299 261.703 299 L 295.855 299 297.927 296.365 C 299.931 293.818, 300 292.609, 300 260.107 L 300 226.484 323.479 203.021 C 336.393 190.116, 347.366 178.388, 347.865 176.958 C 348.477 175.201, 348.354 173.411, 347.485 171.430 C 346.778 169.818, 335.804 158.154, 323.100 145.508 L 300 122.516 300 88.893 C 300 56.391, 299.931 55.182, 297.927 52.635 L 295.855 50 261.703 50 L 227.552 50 202.980 25.500 C 180.513 3.099, 178.116 1, 175 1 C 171.884 1, 169.487 3.099, 147.020 25.500 M 158.936 83.509 L 143.372 99 121.186 99 L 99 99 99 121.186 L 99 143.372 83.532 158.929 L 68.064 174.486 83.532 190.064 L 99 205.641 99 227.821 L 99 250 121.179 250 L 143.359 250 159.179 265.709 L 175 281.419 190.821 265.709 L 206.641 250 228.821 250 L 251 250 251 227.738 L 251 205.476 266.500 190 L 282.001 174.523 266.500 159 L 251 143.477 251 121.239 L 251 99 228.821 99 L 206.641 99 191.031 83.500 C 182.446 74.975, 175.214 68.004, 174.961 68.009 C 174.707 68.013, 167.496 74.988, 158.936 83.509" stroke="none" fill="#000000" fillRule="evenodd" />
                            </svg>
                            <span>Search</span>
                        </button>
                    </div>
                </form>
            </div>

            {error && (
                <div className="alert alert-danger name-alert mt-2">
                    <small>{error} in expansion "{setCode}"</small>
                </div>
            )}
        </div>
    )
}

export default SearchForm