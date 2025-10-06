import { useContext } from "react"
import GlobalContext from "../contexts/globalContext"

const SearchModeSwitch = () => {

    const { searchMode, setSearchMode } = useContext(GlobalContext)

    return (
        <div className="btn-group rounded-pill mb-5 w-100" role="group" aria-label="Search mode">
            <input
                type="radio"
                className="btn-check"
                name="searchMode"
                id="name"
                autoComplete="off"
                checked={searchMode === "name"}
                onChange={() => setSearchMode("name")}
            />
            <label className="btn btn-outline-primary rounded-start-pill w-50" htmlFor="name">
                <small>Search by name</small>
            </label>

            <input
                type="radio"
                className="btn-check"
                name="searchMode"
                id="number"
                autoComplete="off"
                checked={searchMode === "number"}
                onChange={() => setSearchMode("number")}
            />
            <label className="btn btn-outline-primary rounded-end-pill w-50" htmlFor="number">
                <small>Search by collector number</small>
            </label>
        </div>
    )
}

export default SearchModeSwitch
