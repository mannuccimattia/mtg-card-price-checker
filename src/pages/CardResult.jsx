import { useContext, useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import axios from "axios";
import GlobalContext from "../contexts/globalContext";

const CardResult = () => {

    const [card, setCard] = useState([]);

    const { code, number } = useParams();
    const { setIsLoading } = useContext(GlobalContext);

    const fetchCard = () => {
        setIsLoading(true);

        const url = `https://api.scryfall.com/cards/${code}/${number}`;
        axios.get(url).then(res => {
            setCard(res.data);
            setIsLoading(false);
        }).catch(err => console.log(err));
    };

    useEffect(() => {
        fetchCard();
    }, []);

    return (
        <div className="container">
            <div className='row pt-5'>
                {card?.object && <>
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
                        <h5 className="my-4">{card.oracle_text}</h5>
                        <h6><em className="text-secondary">{card.flavor_text}</em></h6>
                        <hr className="my-4" />
                        <div className="row">
                            <div className="col-6 d-flex">
                                <div className="fw-semibold pe-1">{card.set_name}</div>
                                <span className="text-secondary">({card.set.toUpperCase()})</span>
                            </div>
                            <div className="col-6 text-end">
                                <span>€ {card.prices.eur}</span>
                                <span> / </span>
                                <span>€ {card.prices.eur_foil}</span>
                                <span className="foil-icon ms-2"></span>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-6">
                                <a className="btn btn-outline-primary price-btn w-100" href={card.purchase_uris.cardmarket} target="_blank">
                                    <svg focusable="false" aria-hidden="true" width="15" height="15" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                        <g fillRule="nonzero">
                                            <path d="M4.168 14.093c-.084-.226-1-2.735-2.044-5.597C.038 2.773.094 3.14 1.18 2.73c.55-.21.592-.21.662.014.042.127.592 2.552 1.213 5.386 1.07 4.878 1.156 5.16 1.55 5.54.24.212.606.38.818.395.366 0 .366.014-.113.197-.747.296-.973.254-1.142-.17z" /><path d="M5.31 12.782c-.268-.268-.282-.465-.282-2.862 0-2.777.085-3.186.663-3.003.424.14 2.2 2.17 2.1 2.41-.126.353-.393.24-1.17-.52l-.746-.734v4.145h4.103l-.282-.366c-.17-.212-.297-.48-.297-.607s.945-1.17 2.1-2.326c1.552-1.552 2.172-2.073 2.34-2.003.128.043.213.17.185.282-.03.112-.875 1.1-1.904 2.17l-1.862 1.96.494.48c.507.493.634 1.028.254 1.17-.127.042-1.396.084-2.82.084-2.41 0-2.608-.014-2.876-.282zM3.224 5.183C2.8 3.18 2.49 1.39 2.52 1.208c.027-.268.168-.367.788-.494l.733-.17V4.69c0 2.284-.013 4.145-.027 4.145-.028 0-.38-1.65-.79-3.652z" /><path d="M7.143 6.917c-.776-.747-1.27-1.34-1.27-1.508 0-.184.692-.974 1.79-2.102l1.792-1.804-.536-.55c-.297-.31-.494-.62-.452-.705.07-.1.987-.156 2.763-.156 2.285 0 2.666.028 2.736.226.042.126.085 1.325.085 2.678 0 2.848-.07 3.003-.958 2.13l-.507-.523-1.79 1.762C9.61 7.552 8.918 8.13 8.707 8.13c-.198 0-.762-.437-1.565-1.213z" />
                                        </g>
                                    </svg>
                                    <span className="ps-1">Cardmarket</span>
                                </a>
                            </div>
                            <div className="col-6">
                                <a className="btn btn-outline-primary price-btn w-100" href={card.purchase_uris.tcgplayer} target="_blank">
                                    <svg style={{ translate: "0 -10%" }} focusable="false" aria-hidden="true" width="15" height="15" viewBox="0 0 14 14" xmlns="http://www.w3.org/2000/svg">
                                        <g fillRule="evenodd">
                                            <path d="m2.715 3.004-1.981.285a.82.82 0 0 0-.714.926l.989 6.396c.07.445.5.752.964.687l.742-.106V3.004ZM13.287 3.289l-1.955-.28v8.187l.716.104c.462.066.894-.242.964-.687L14 4.218c.07-.446-.25-.862-.714-.927v-.002Z" fillRule="nonzero" /><path d="M4.094 2.1h5.86c.47 0 .848.366.848.816v8.368c0 .452-.38.816-.847.816H4.094c-.47 0-.847-.366-.847-.816V2.916c0-.452.38-.816.847-.816Zm3.56 4.063h1.78c.17 0 .271.186.176.321l-2.534 3.564c-.12.165-.388.086-.388-.115V8.084H4.612c-.157 0-.26-.158-.192-.294l1.75-3.48a.214.214 0 0 1 .192-.115h1.943c.157 0 .26.158.192.294l-.843 1.674Z" />
                                        </g>
                                    </svg>
                                    <span className="ps-1">TCGplayer</span>
                                </a>
                            </div>
                        </div>
                        <div className="row mt-4">
                            <div className="col-12 text-center mb-3">
                                <small className="ps-3 text-secondary">Prices refer to NM copies</small>
                            </div>
                            <div className="col-6">
                                <a className="text-info-emphasis" href="https://help.cardmarket.com/en/CardCondition" target="_blank">
                                    Cardmarket condition guide
                                </a>
                            </div>
                            <div className="col-6 text-end">
                                <a className="text-info-emphasis" href="https://mktg-assets.tcgplayer.com/web/seller/guides/Card-Conditioning-Standards.pdf" target="_blank">
                                    TCGplayer condition guide
                                </a>
                            </div>
                        </div>
                        <hr className="my-4" />
                    </div>
                </>}
            </div>
        </div>
    )
}

export default CardResult
