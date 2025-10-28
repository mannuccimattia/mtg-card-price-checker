import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const SymbologyContext = createContext(null);

export const useSymbology = () => {
    const context = useContext(SymbologyContext);
    return context;
};

export const SymbologyProvider = ({ children }) => {
    const [symbols, setSymbols] = useState([]);

    const fetchSymbology = () => {
        axios.get("https://api.scryfall.com/symbology")
            .then(res => setSymbols(res.data))
            .catch(err => console.error(err));
    };

    useEffect(() => {
        fetchSymbology();
    }, []);

    const replaceTextWithSymbols = (text) => {
        // Return the original text if no text provided
        if (!text) return text;

        // Return original text if symbols haven't loaded yet
        if (!symbols.data) return text;

        // Create a map for O(1) lookup
        const symbolMap = new Map();
        symbols.data.forEach(sym => {
            symbolMap.set(sym.symbol, sym.svg_uri);
        });

        // Split text by symbol tokens like {G}, {2/W}, etc.
        const parts = text.split(/(\{[^}]+\})/g);

        // Map each part to either plain text or an <img>
        return parts.map((part, i) => {
            if (symbolMap.has(part)) {
                return (
                    <img
                        key={i}
                        className="sym-svg"
                        src={symbolMap.get(part)}
                        alt={part}
                    />
                );
            }
            return part; // plain text
        });
    };

    const value = { symbols, replaceTextWithSymbols };

    return (
        <SymbologyContext.Provider value={value}>
            {children}
        </SymbologyContext.Provider>
    );
}