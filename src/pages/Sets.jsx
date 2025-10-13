import { useContext, useEffect, useState } from "react"
import GlobalContext from "../contexts/globalContext";
import axios from "axios";
import SetCard from "../components/SetCard";
import PageScrollButtons from "../components/PageScrollButtons";

const Sets = () => {

    const [sets, setSets] = useState(null);
    const { setIsLoading } = useContext(GlobalContext);

    const fetchSets = () => {
        setIsLoading(true);
        const url = "https://api.scryfall.com/sets"
        axios.get(url).then(res => {
            // Sort the sets alphabetically by name.
            // Remove digital only sets.
            const sortedSets = res.data.data
                .filter(set => !set.digital)
                .sort((a, b) => a.name.localeCompare(b.name));

            setSets(sortedSets);
            setIsLoading(false);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        fetchSets();
    }, []);

    return (
        <div className="container scrollable-container position-relative">
            <div className="row sets-wrapper row-gap-2 column-gap-3 justify-content-center">
                {sets && sets.map(set => (
                    <SetCard set={set} key={set.code} />
                ))}
            </div>

            {sets && <PageScrollButtons />}


        </div>
    )
}

export default Sets
