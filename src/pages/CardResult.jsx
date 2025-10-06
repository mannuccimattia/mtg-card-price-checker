import { useEffect } from "react"
import { useLocation } from "react-router-dom";

const CardResult = () => {
    const { state } = useLocation();
    const card = state?.card || null;

    useEffect(() => {
        if (!card) {
            console.log("no card")
        }
        else {
            console.log(card);
        }
    }, []);

    return (
        <div className="container">
            <h1 className='text-center mb-5'>Card result page</h1>
        </div>
    )
}

export default CardResult
