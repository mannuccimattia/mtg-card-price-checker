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
    };

    const scrollToTop = () => {
        const page = document.querySelector(".sets-wrapper");
        if (page) {
            page.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    const scrollOnePageDown = () => {
        const page = document.querySelector(".sets-wrapper");
        if (page) {
            const currentScroll = page.scrollTop;
            const pageHeight = page.clientHeight;

            // Scroll down by visible height
            page.scrollTo({
                top: currentScroll + pageHeight - 30,
                behavior: "smooth"
            });
        }
    };

    useEffect(() => {
        fetchSets();
    }, []);

    return (
        <div className="container scrollable-container position-relative">
            <div className="row pt-5 sets-wrapper row-gap-2 column-gap-3 justify-content-center">
                {sets && sets.map(el => (
                    <div className="col-12 col-xl-3 d-flex column-gap-1 align-items-center">
                        <div className="card flex-row align-items-center justify-content-between sets-card" data-bs-theme="dark">
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
                            <div className="col-4 set-code fw-semibold">{el.code}</div>
                        </div>
                    </div>
                ))}
            </div>

            {sets && <div className="page-nav-btn d-flex flex-column row-gap-2">
                <i className="up-btn fa-solid fa-circle-up text-primary" onClick={scrollToTop}></i>
                <i className="up-btn fa-solid fa-circle-down text-primary" onClick={scrollOnePageDown}></i>
            </div>}


        </div>
    )
}

export default Sets
