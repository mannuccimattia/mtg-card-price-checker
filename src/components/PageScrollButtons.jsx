import { useNavigate } from "react-router-dom";

const PageScrollButtons = () => {

    const navigate = useNavigate();

    const scrollToTop = () => {
        const page = document.querySelector(".sets-wrapper");
        if (page) {

            // Scroll to top
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

    return (
        <div className="page-nav-btn d-flex flex-column row-gap-2">
            <i className="up-btn fa-solid fa-circle-left text-primary" onClick={() => navigate("/")}></i>
            <i className="up-btn fa-solid fa-circle-up text-primary" onClick={scrollToTop}></i>
            <i className="up-btn fa-solid fa-circle-down text-primary" onClick={scrollOnePageDown}></i>
        </div>
    )
}

export default PageScrollButtons
