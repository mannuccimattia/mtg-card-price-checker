import { useEffect } from "react"
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";

const CardResult = () => {
    const { state } = useLocation();
    let card = state?.card || null;

    const { code, number } = useParams();

    useEffect(() => {
        if (!card) {
            const url = `https://api.scryfall.com/cards/${code}/${number}`;
            axios.get(url).then(res => {
                console.log(res.data);
            });
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
