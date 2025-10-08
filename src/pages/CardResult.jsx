import { useContext, useEffect, useEffectEvent } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../contexts/globalContext";

const CardResult = () => {

    // HOMEPAGE CREA ROTTA CARD/CODE/NUMBER
    // USE PARAMS PER CODE E NUMBER
    // AJAX A CARDS/:CODE/:NUMBER API
    // SALVO CARD IN VARIABILE DI STATO QUI

    return (
        <div className="container">
            <div className='row pt-5'>
                {card && <>
                    <div className="col-12 col-md-5">
                        <img className="img-fluid rounded-5" src={card.image_uris.normal} alt={card.name + " card image"} />
                    </div>
                    <div className="col-12 col-md-7 pe-5">
                        <div className="d-flex justify-content-between">
                            <h2 className="mb-0">{card.name}</h2>
                            <h2 className="mb-0">{card.mana_cost}</h2>
                        </div>
                        <h6 className="text-secondary">
                            {card.type_line}
                        </h6>
                        <h5>{card.oracle_text}</h5>
                        <h6><em className="text-secondary">{card.flavor_text}</em></h6>
                    </div>
                </>}
            </div>
        </div>
    )
}

export default CardResult
