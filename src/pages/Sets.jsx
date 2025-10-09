import { useContext, useEffect, useState } from "react"
import GlobalContext from "../contexts/globalContext";
import axios from "axios";

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
    }

    useEffect(() => {
        fetchSets();
    }, []);

    return (
        <div className="container scrollable-container">
            <div className="row pt-5 sets-wrapper row-gap-2 column-gap-3 justify-content-center">
                {sets && sets.map(el => (
                    <div className="col-3 d-flex column-gap-1 align-items-center">
                        <div
                            className="col-2 set-icon"
                            style={{
                                maskImage: `url(${el.icon_svg_uri})`,
                                WebkitMaskImage: `url(${el.icon_svg_uri})`,
                                backgroundColor: "#c09405ff",
                                width: '24px',
                                height: '24px',
                            }}
                        />
                        <div className="col-6 set-name">{el.name}</div>
                        <div className="col-4 set-code">{el.code}</div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Sets
